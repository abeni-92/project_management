"use client";
import { notification } from "antd";
import { LucideX } from "lucide-react";
import { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, form, create }: any) => {
  const [formData, setFormData] = useState(form);
  useEffect(() => {
    // Add event listener to close modal when clicking outside of it
    const handleClickOutside = (event: any) => {
      if (isOpen && event.target.closest(".modal-content") === null) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const openNotification = () => {
    notification.success({
      message: "Form Submitted",
      description: `${create} has been successfully created.`,
      duration: 3,
    });
  };

  const handleChange = (e: any) => {
    const { name, value, type, selectedOptions } = e.target;
    if (type === "select-multiple") {
      const selectedValues = Array.from(selectedOptions).map(
        (option: any) => option.value,
      );
      setFormData({
        ...formData,
        [name]: { ...formData[name], value: selectedValues },
      });
    } else {
      setFormData({
        ...formData,
        [name]: { ...formData[name], value },
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onClose();
    openNotification();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        {/* Backdrop */}
        <div className="absolute inset-0"></div>

        <div className="modal-content relative z-50 max-h-[90%] w-[80%] min-w-100 overflow-y-scroll rounded-lg bg-white shadow-lg shadow-black dark:bg-boxdark sm:w-auto ">
          <div className="sticky top-0 flex justify-between border-b border-slate-400 bg-black p-4 text-white dark:border-slate-600 dark:bg-boxdark-2">
            <h2 className="font-bold">{create}</h2>
            <button onClick={onClose}>
              <LucideX />
            </button>
          </div>
          <form className="flex flex-col gap-4 py-8" onSubmit={handleSubmit}>
            {/* Render form fields dynamically based on the form data */}
            {Object.keys(formData).map((fieldName) => (
              <div key={fieldName} className="">
                <label
                  htmlFor={fieldName}
                  className="flex flex-col gap-1 px-6 text-lg text-black dark:text-white"
                >
                  {fieldName}
                  {formData[fieldName].type === "select" ? (
                    <select
                      id={fieldName}
                      name={fieldName}
                      value={formData[fieldName].value}
                      onChange={handleChange}
                      className="rounded-md border border-stroke bg-stroke p-1 dark:border-form-input dark:bg-form-input"
                      required
                      multiple={formData[fieldName].multiple}
                    >
                      {formData[fieldName].options.map((option: any) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : formData[fieldName].type === "radio" ? (
                    <div className="flex gap-4">
                      {formData[fieldName].options.map((option: any) => (
                        <label
                          key={option}
                          className="mr-30 flex items-center gap-2"
                        >
                          <input
                            type="radio"
                            name={fieldName}
                            value={option}
                            checked={formData[fieldName].value === option}
                            onChange={handleChange}
                            required
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  ) : formData[fieldName].type === "textarea" ? (
                    <textarea
                      name={fieldName}
                      id={fieldName}
                      className="rounded-md border border-stroke bg-stroke p-1 dark:border-form-input dark:bg-form-input"
                      placeholder={fieldName}
                    />
                  ) : (
                    <input
                      type={formData[fieldName].type}
                      id={fieldName}
                      name={fieldName}
                      placeholder={fieldName}
                      value={formData[fieldName].value}
                      onChange={handleChange}
                      className="rounded-md border border-stroke bg-stroke p-1 dark:border-form-input dark:bg-form-input"
                      required
                    />
                  )}
                </label>
              </div>
            ))}
            <button
              type="submit"
              className="mt-6 w-1/3 self-center rounded-md bg-blue-300 p-2 font-bold text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
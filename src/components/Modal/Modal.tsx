import { useState } from 'react';
import { notification } from 'antd';
import { LucideX } from 'lucide-react';

const Modal = ({ isOpen, onClose, form, create }) => {
  const [formData, setFormData] = useState(form);

  const openNotification = () => {
    notification.success({
      message: 'Form Submitted',
      description: `New ${create} has been successfully created.`,
      duration: 3,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    if (type === 'select-multiple') {
      const selectedValues = Array.from(selectedOptions).map(
        (option) => option.value
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    openNotification();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        {/* Backdrop */}
        <div className="absolute inset-0"></div>

        <div className="z-50 w-2/5 bg-white shadow-lg shadow-black">
          <div className="bg-black flex justify-between p-4 text-white border-b border-slate-400">
            <h2 className="font-bold">Add New {create}</h2>
            <button onClick={onClose}>
              <LucideX />
            </button>
          </div>
          <form className="flex flex-col gap-4 p-10" onSubmit={handleSubmit}>
            {/* Render form fields dynamically based on the form data */}
            {Object.keys(formData).map((fieldName) => (
              <div key={fieldName}>
                <label
                  htmlFor={fieldName}
                  className="flex items-center justify-between text-xl text-black px-6"
                >
                  {fieldName}
                  {formData[fieldName].type === 'select' ? (
                    <select
                      id={fieldName}
                      name={fieldName}
                      value={formData[fieldName].value}
                      onChange={handleChange}
                      className="p-1 border border-slate-400 rounded-sm w-2/3"
                      required
                      multiple={formData[fieldName].multiple}
                    >
                      {formData[fieldName].options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : formData[fieldName].type === 'radio' ? (
                    <div className="flex gap-4">
                      {formData[fieldName].options.map((option) => (
                        <label
                          key={option}
                          className="flex gap-2 items-center mr-30"
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
                  ) : (
                    <input
                      type={formData[fieldName].type}
                      id={fieldName}
                      name={fieldName}
                      value={formData[fieldName].value}
                      onChange={handleChange}
                      className="p-1 border border-slate-400 rounded-sm w-2/3"
                      required
                    />
                  )}
                </label>
              </div>
            ))}
            <button
              type="submit"
              className="w-1/3 self-center bg-blue-300 text-black font-bold p-2 mt-6 rounded-md"
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

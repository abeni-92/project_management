"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { InputField, InputFieldWithIcon } from "@/app/_components/input";
import { LucideLock, LucideMail, LucideUser } from "lucide-react";
import { useForm } from "react-hook-form";
import { SignupValidator, TSignupSchema } from "../models";
import { zodResolver } from "@hookform/resolvers/zod";

import { auth, db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { redirect, useRouter } from "next/navigation";

const SignUp = () => {
  console.log("signup page==");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  // useEffect(() => {
  //   async function fetchUsers() {
  //     const fetchedUsers = await getUsers();
  //     console.log("users:", fetchedUsers);
  //     // setUsers(fetchedUsers);
  //   }
  //   fetchUsers();
  // }, []);

  const [modifiedData, setModifiedData] = useState<Partial<TSignupSchema>>({});
  const handleChange = (fieldName: keyof TSignupSchema, value: string) => {
    setModifiedData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const {
    register,
    handleSubmit,
    formState: errors,
    watch,
  } = useForm<TSignupSchema>({
    resolver: zodResolver(SignupValidator),
  });

  // const getUsers = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //   console.log("users", users)
  // }

  // getUsers();

  const onSubmit = async (data: TSignupSchema) => {
    console.log("submitted:", data);
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const user = userCredential.user;

      // Store additional user information in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: data.name,
        email: data.email,
      });

      console.log("User created successfully");
      router.push("/auth/signin"); // Redirect to sign-in page or dashboard after successful signup
    } catch (error: any) {
      console.error("Error creating user:", error.message);
      setError(error.message);
    }
    // try {
    //   const response = await fetch('/api/users', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Failed to create user');
    //   }

    //   const result = await response.json();
    //   console.log('User created successfully:', result.message);
    // } catch (error: any) {
    //   console.log('Error creating user:', error.message);
    // }

    // try {
    //   await createUser(data)
    // } catch (error: any) {
    //   console.log("Error creating user:", error.message)
    // }
  };

  return (
    <>
      <div className="h-screen overflow-y-auto rounded-sm bg-boxdark text-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="my-10 flex min-h-screen flex-wrap items-center justify-center">
          <div className="w-full border-strokedark shadow-default dark:border-strokedark sm:w-2/3 lg:w-1/3 xl:border-l-2">
            <div className="w-full border-1 border-strokedark p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-center text-2xl font-bold dark:text-white sm:text-title-xl2">
                Sign Up
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* <div className="mb-4">
                  <label className="mb-2.5 block font-medium dark:text-white">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-strokedark bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                            fill=""
                          />
                          <path
                            d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div> */}

                <InputFieldWithIcon
                  name="name"
                  icon={<LucideUser />}
                  changeFunc={handleChange}
                  placeholder="Enter your full name"
                  label={"Name"}
                  register={register}
                  errors={errors}
                />

                <InputFieldWithIcon
                  name="email"
                  inputType="email"
                  icon={<LucideMail />}
                  changeFunc={handleChange}
                  placeholder="Enter your email"
                  label={"Email"}
                  register={register}
                  errors={errors}
                />

                <InputFieldWithIcon
                  name="password"
                  inputType="password"
                  icon={<LucideLock />}
                  changeFunc={handleChange}
                  placeholder="Enter your password"
                  label={"Password"}
                  register={register}
                  errors={errors}
                />

                <InputFieldWithIcon
                  name="confirmPassword"
                  inputType="password"
                  icon={<LucideLock />}
                  changeFunc={handleChange}
                  placeholder="Re-enter your password"
                  label={"Confirm Password"}
                  register={register}
                  errors={errors}
                />

                {error && <p className="text-red-500 text-center">{error}</p>}

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Create account"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Already have an account?{" "}
                    <Link href="/auth/signin" className="text-primary">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

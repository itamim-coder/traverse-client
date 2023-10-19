"use client";

import FormInput from "@/app/components/Forms/FormInput";
import Form from "@/app/components/Forms/form";
import { useCreateAdminMutation } from "@/redux/api/adminApi";
import { Alert } from "antd";
import React from "react";
import { SubmitHandler } from "react-hook-form";
type FormValues = {
  name: string;
  email: string;
  password: string;
};

const CreateAdminPage = () => {
  const [createAdmin] = useCreateAdminMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await createAdmin({ ...data }).unwrap();
      console.log(res);
      if (res?.id) {
        <Alert message="Successfully Added Admin" type="success" showIcon />;
      }
    } catch (err) {}
  };
  return (
    <>
      <h1>Admin Information</h1>
      <div className="flex justify-center">
        <Form submitHandler={onSubmit}>
          <div className="">
            <FormInput name="name" type="text" size="large" label="Full Name" />
          </div>
          <div className="my-4">
            <FormInput
              name="email"
              type="email"
              size="large"
              label="Admin Email"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="password"
              type="password"
              size="large"
              label="Password"
            />
          </div>
          <button
            type="submit"
            className="group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Admin
          </button>
        </Form>
      </div>
    </>
  );
};

export default CreateAdminPage;

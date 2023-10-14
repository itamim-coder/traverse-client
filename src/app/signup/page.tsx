"use client";
import { Button, Col, Input, Row } from "antd";

import { SubmitHandler } from "react-hook-form";
import Form from "../components/Forms/form";
import FormInput from "../components/Forms/FormInput";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };
  return (
    <Row className="flex justify-center items-center min-h-screen bg-gray-100">
      <Col sm={12} md={8} lg={8}>
        <div className="p-4 ">
          <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>

          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <Form submitHandler={onSubmit}>
                <div>
                  <FormInput
                    name="name"
                    type="text"
                    size="large"
                    label="User Name"
                  />
                </div>
                <div className="my-4">
                  <FormInput
                    name="email"
                    type="email"
                    size="large"
                    label="User Email"
                  />
                </div>
                <div className="mb-4">
                  <FormInput
                    name="password"
                    type="password"
                    size="large"
                    label="User Password"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
              </Form>
              <p className="mt-2 mb-4 text-center text-sm text-gray-600 max-w">
                Already have an Account?
                <a
                  href="/signin"
                  className="mx-2 font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SignupPage;

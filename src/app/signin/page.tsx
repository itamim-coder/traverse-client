"use client";
import { Button, Col, Input, Row } from "antd";

import { SubmitHandler } from "react-hook-form";
import Form from "../components/Forms/form";
import FormInput from "../components/Forms/FormInput";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };
  return (
    <Row className="flex justify-center items-center min-h-screen bg-gray-100">
      <Col sm={12} md={8} lg={8}>
        <div className="p-4 ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 mb-4 text-center text-sm text-gray-600 max-w">
            Or
            <a
              href="/signup"
              className="mx-2 font-medium text-blue-600 hover:text-blue-500"
            >
              create an account
            </a>
          </p>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <Form submitHandler={onSubmit}>
                <div>
                  <FormInput
                    name="email"
                    type="text"
                    size="large"
                    label="User Email"
                  />
                </div>
                <div className="my-4">
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
                  Sign in
                </button>
              </Form>
            </div>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-100 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <img
                      className="h-5 w-5"
                      src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <img
                      className="h-5 w-5"
                      src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <img
                      className="h-6 w-6"
                      src="https://www.svgrepo.com/show/506498/google.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;

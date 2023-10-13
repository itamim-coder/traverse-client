"use client";
import { Button, Col, Input, Row } from "antd";

import { SubmitHandler } from "react-hook-form";
import Form from "../components/Forms/form";
import FormInput from "../components/Forms/FormInput";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };
  return (
    <Row className="flex justify-center items-center min-h-screen">
      <Col sm={12} md={8} lg={8}>
        <h1 className="my-4 text-2xl">First login your account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div className="my-4">
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button htmlType="submit">Login</Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;

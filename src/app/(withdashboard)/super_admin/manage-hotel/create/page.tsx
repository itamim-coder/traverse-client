"use client"

import { Button, Upload } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import Form from "@/app/components/Forms/form";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
//   name: string;
//   email: string;
//   password: string;
};

const CreateHotelPage = () => {
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      //   const res = await createAdmin({ ...data }).unwrap();
      console.log(data);
    } catch (err) {}
  };

  const handleImageUpload = (info: { file: { status: string; originFileObj: any; }; }) => {
    if (info.file.status === 'done' && info.file.originFileObj) {
      // Access the uploaded image data
      const imageFile = info.file.originFileObj;
      console.log('Image Data:', imageFile);
    }
  };
  return (
    <div>
      <h1>Create Hotel</h1>
      <Form submitHandler={onSubmit}>
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture"
          maxCount={3}
          multiple
        >
          <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button>
        </Upload>
        <button
            type="submit"
            className="group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create 
          </button>
      </Form>
    </div>
  );
};

export default CreateHotelPage;

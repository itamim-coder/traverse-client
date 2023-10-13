"use client";
import { Layout } from "antd";
import React from "react";
import TABreadCrumb from "./TABreadCrumb";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <TABreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: "customer",
            link: `/${base}/customer`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;

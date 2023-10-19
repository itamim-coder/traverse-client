"use client";
import { Layout } from "antd";
import React from "react";
import TABreadCrumb from "./TABreadCrumb";
import Header from "./header";
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
      <Header />
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

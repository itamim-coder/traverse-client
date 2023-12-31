"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";

import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.services";
import Link from "next/link";
const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      className="overflow-auto min-h-screen sticky left-0 top-0 bottom-0"
    >
      <div>
        <Link
          href={"/"}
          className="text-white text-2xl text-center font-semibold mb-4"
        >
          Traverse
        </Link>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;

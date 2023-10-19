"use client";

import { Layout } from "antd";
import SideBar from "../components/ui/sidebar";

import Contents from "../components/ui/contents";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/services/auth.services";
import NavBar from "../components/ui/navbar";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/signin");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return <p>Loading......</p>;
  }

  return (
    <>
      <NavBar/>
      {children}
    </>
  );
};

export default WebLayout;

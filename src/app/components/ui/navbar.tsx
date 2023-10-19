"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { getUserInfo, removeUserInfo } from "@/services/auth.services";
import { authKey } from "@/constants/storageKey";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function NavBar() {
  console.log(getUserInfo());

  const { email } = getUserInfo();
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    router.refresh();
  };

  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <Link href="/">
          <p className="font-bold text-black text-inherit">TRAVERSE</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {email ? (
          <>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{email}</p>
                </DropdownItem>

                <DropdownItem key="my_profile">My Profile</DropdownItem>

                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem onClick={logOut} key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        ) : (
          <>
            <Link href="/signin">
              <Button>Sign in</Button>
            </Link>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}

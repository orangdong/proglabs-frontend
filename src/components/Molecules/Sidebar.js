import { Flex, Box } from "@chakra-ui/react";
import SidebarLink from "../Atoms/SidebarLink";
import Image from "next/image";
import NextLink from "next/link";

import { FiHome, FiUser, FiBookOpen, FiFileText } from "react-icons/fi";

export default function Sidebar() {
  const links = [
    {
      title: "Dashboard",
      link: "/dashboard",
      icon: FiHome,
    },
    {
      title: "My Course",
      link: "/dashboard/my-course",
      icon: FiBookOpen,
    },
    {
      title: "All Courses",
      link: "/courses",
      icon: FiFileText,
    },
    {
      title: "Profile",
      link: "/dashboard/profile",
      icon: FiUser,
    },
  ];
  return (
    <Flex
      bg={"white"}
      bottom={0}
      borderRight={{ base: "none", md: "1px" }}
      borderRightColor={{ base: "transparent", md: "gray.200" }}
      h={{ base: "10vh", md: "100vh" }}
      w={{ base: "100vw", md: "18vw" }}
      flexDir={{ base: "row", md: "column" }}
      px={3}
      py={{ base: 1, md: 5 }}
      justifyContent={{ base: "space-between", md: "normal" }}
      zIndex={3}
    >
      <Box
        as={NextLink}
        href="/"
        mb={5}
        display={{ base: "none", md: "block" }}
        px={3}
      >
        <Image
          src="/assets/logo-black.svg"
          alt="logo"
          width="160"
          height="35"
        />
      </Box>
      {links.map((link, i) => (
        <SidebarLink
          key={i}
          title={link.title}
          icon={link.icon}
          link={link.link}
        />
      ))}
    </Flex>
  );
}

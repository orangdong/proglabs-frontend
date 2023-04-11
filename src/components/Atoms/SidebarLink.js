import { Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";

export default function SidebarLink({ title, link, icon }) {
  return (
    <Link
      fontWeight={{ base: "medium" }}
      fontSize={{ base: "12px", md: "18px" }}
      as={NextLink}
      href={link}
      bg={"white"}
      _hover={{
        bg: "#E3E8F4",
        textDecor: "none",
      }}
      borderRadius={"12px"}
      px={4}
      py={4}
      mb={{ base: 0, md: 3 }}
      alignItems={"center"}
      display={"flex"}
      flexDir={{ base: "column", md: "row" }}
      justifyContent={{ base: "center", md: "normal" }}
    >
      <Icon
        as={icon}
        fontSize={{ base: "16", md: "18" }}
        mr={{ base: 0, md: 4 }}
        mb={{ base: 1, md: 0 }}
      />
      {title}
    </Link>
  );
}

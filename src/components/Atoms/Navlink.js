import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navlink({ label, navigation }) {
  return (
    <Link
      py={2}
      px={3}
      _hover={{ bg: "#E3E8F4" }}
      borderRadius={"10px"}
      fontWeight={"medium"}
      fontSize={"18px"}
      color={"textGray"}
      href={navigation}
      as={NextLink}
    >
      {label}
    </Link>
  );
}

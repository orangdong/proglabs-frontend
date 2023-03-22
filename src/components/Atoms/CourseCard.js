import { Box } from "@chakra-ui/react";
import NextLink from "next/link";

export default function CourseCard({ children, ...rest }) {
  return (
    <Box
      as={NextLink}
      {...rest}
      p={6}
      mb={5}
      className="course-card"
      _hover={{
        textDecoration: "none",
      }}
    >
      {children}
    </Box>
  );
}

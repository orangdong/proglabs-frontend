import { Box } from "@chakra-ui/react";

export default function CourseCard({ children, ...rest }) {
  return (
    <Box {...rest} p={6} mb={5} className="course-card">
      {children}
    </Box>
  );
}

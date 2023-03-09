import { Box } from "@chakra-ui/react";

export default function CourseCard({ children }) {
  return (
    <Box p={6} mb={5} className="course-card">
      {children}
    </Box>
  );
}

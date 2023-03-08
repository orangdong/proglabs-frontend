import { Box } from "@chakra-ui/react";

export default function CourseCard({ children }) {
  return (
    <Box p={6} className="course-card">
      {children}
    </Box>
  );
}

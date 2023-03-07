import { Box, Flex } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        h={"full"}
        maxW={"1280px"}
        w={"full"}
        mx={"auto"}
        px={4}
      >
        This is HeroSection
      </Flex>
    </Box>
  );
}

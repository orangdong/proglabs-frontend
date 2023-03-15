import GeneralLayout from "@/components/GeneralLayout";
import HowWeWorks from "@/components/Sections/About/HowWeWorks";
import WhyWeBuild from "@/components/Sections/About/WhyWeBuild";
import { Flex, Box, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <GeneralLayout title={"About"}>
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
          <Flex
            my={{ base: "60px", md: "92px" }}
            flexDir={"column"}
            alignItems={"center"}
            w={"full"}
          >
            <Text
              textAlign={"center"}
              fontWeight={"bold"}
              fontSize={{ base: 36, md: 48 }}
              mb={4}
            >
              About Us
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{ base: "18px", md: "22px" }}
              color={"textGray"}
              mb={"60px"}
            >
              Here&apos;s everything you need to know about Proglabs
            </Text>
            <WhyWeBuild />
            <HowWeWorks />
          </Flex>
        </Flex>
      </Box>
    </GeneralLayout>
  );
}

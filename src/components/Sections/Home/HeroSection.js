import HighlightedText from "@/components/Atoms/HighlightedText";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

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
        <Flex
          mt={"60px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"full"}
          flexWrap={"wrap"}
        >
          <Box mb={{ base: 4, md: 0 }}>
            <Box
              fontWeight={{ base: "extraBold", md: "bold" }}
              fontSize={{ base: "36px", md: "60px" }}
              lineHeight={"72px"}
              maxW="715px"
              position={"relative"}
            >
              Your{" "}
              <HighlightedText
                text={"New Experience"}
                highlightW={{ base: "250px", md: "438px" }}
                highlight={
                  "linear-gradient(90.07deg, #4FF5D2 38.95%, rgba(255, 255, 255, 0) 117.98%)"
                }
              />{" "}
              Learning Platform Partner
            </Box>
            <Text
              maxW={"715px"}
              fontSize={{ base: "18px", md: "22px" }}
              mt={"32px"}
              color={"textGray"}
            >
              We utilize NFT Technology to deliver the best learning experience
              and user safety.
            </Text>
            <Button
              as={Link}
              rightIcon={<FiChevronRight size={20} />}
              mt={"44px"}
              py={3}
              px={6}
              bg={"backgroundTeal"}
              color={"textWhite"}
              fontWeight={"semiBold"}
              fontSize={"18px"}
              borderRadius={"10px"}
              _hover={{ bg: "backgroundTealHover" }}
              href="/courses"
            >
              Start Learning Now
            </Button>
          </Box>
          <Image
            src="/assets/illustration.svg"
            width={500}
            height={500}
            alt="illustration"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

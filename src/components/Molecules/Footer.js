import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

export default function Footer({ isHome = false }) {
  return (
    <Box bg={"backgroudDark"} position={"relative"} mt={isHome ? "370px" : 0}>
      {isHome ? (
        <Flex
          flexDir={"column"}
          position={"absolute"}
          z={8}
          maxW={"1056px"}
          maxH={"520px"}
          px={4}
          py={{ base: "80px", md: "112px" }}
          backgroundColor={"white"}
          backgroundImage="url('/assets/footer-card.svg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          mx={{ base: 4, md: "auto" }}
          left={0}
          right={0}
          top={{ base: "-280px", sm: "-330px", md: "-370px" }}
          borderRadius={"32px"}
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              textAlign={"center"}
              fontWeight="extraBold"
              fontSize={{ base: "32px", sm: "54px", md: "72px" }}
            >
              Improved Membership.
            </Text>
            <Text
              textAlign={"center"}
              fontWeight="extraBold"
              fontSize={{ base: "32px", sm: "54px", md: "72px" }}
            >
              Gain Knowledge.
            </Text>
            <Text
              textAlign={"center"}
              fontWeight="semiBold"
              fontSize={{ base: "18px", md: "22px" }}
              mt={4}
              mb={8}
            >
              Start your learning journey with us
            </Text>
            <Link
              bg="backgroundTeal"
              fontWeight={"semiBold"}
              fontSize={{ base: "16px", md: "18px" }}
              color={"textWhite"}
              _hover={{
                bg: "backgroundTealHover",
              }}
              py={3}
              px={6}
              borderRadius={"10px"}
              as={NextLink}
              href="/courses"
            >
              Explore Courses
            </Link>
          </Flex>
        </Flex>
      ) : (
        ""
      )}

      <Flex
        flexDir={"column"}
        maxW={"1280px"}
        w={"full"}
        h={"full"}
        mx={"auto"}
        px={4}
        color={"textWhite"}
      >
        <Flex flexWrap={"wrap"} mb={"120px"} mt={isHome ? "220px" : "92px"}>
          <Box mr={{ base: 0, md: "160px" }}>
            <Image
              src="/assets/logo-white.svg"
              width={197}
              height={54}
              alt="logo"
            />
            <Text
              fontWeight={"semiBold"}
              fontSize={{ base: "16px", md: "18px" }}
              mt={4}
              mb={{ base: 5, md: 0 }}
            >
              Enhance your learning experience
            </Text>
          </Box>
          <Box fontSize={{ base: "16px", md: "18px" }} mr={"52px"}>
            <Text fontWeight="semiBold">Company</Text>
            <Link display={"block"} mt={4} href="#">
              About
            </Link>
            <Link display={"block"} mt={4} href="#">
              Carrers
            </Link>
            <Link display={"block"} mt={4} href="#">
              Partnership
            </Link>
            <Link display={"block"} mt={4} href="#">
              Legal
            </Link>
          </Box>
          <Box fontSize={{ base: "16px", md: "18px" }} mr={"52px"}>
            <Text fontWeight="semiBold">Resources</Text>
            <Link display={"block"} mt={4} href="#">
              Blog
            </Link>
            <Link display={"block"} mt={4} href="#">
              Documentation
            </Link>
            <Link display={"block"} mt={4} href="#">
              Newsletter
            </Link>
            <Link display={"block"} mt={4} href="#">
              Study Guidebook
            </Link>
            <Link display={"block"} mt={4} href="#">
              FAQ
            </Link>
          </Box>
          <Box
            fontSize={{ base: "16px", md: "18px" }}
            mr={"52px"}
            mt={{ base: 5, md: 0 }}
          >
            <Text fontWeight="semiBold">Contact</Text>
            <Link display={"block"} mt={4} href="#">
              Customer Support
            </Link>
            <Link display={"block"} mt={4} href="#">
              Report Abuse
            </Link>
          </Box>
          <Box fontSize={{ base: "16px", md: "18px" }} mt={{ base: 5, md: 0 }}>
            <Text fontWeight="semiBold">Socials</Text>
            <Flex mt={4}>
              <Flex
                as={Link}
                href="#"
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"full"}
                w="40px"
                h="40px"
                bg={"#ECFEFF"}
                mr={3}
              >
                <Image
                  src={"/assets/insta-icon.svg"}
                  width={30}
                  height={30}
                  alt="insta"
                />
              </Flex>
              <Flex
                as={Link}
                href="#"
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"full"}
                w="40px"
                h="40px"
                bg={"#ECFEFF"}
                mr={3}
              >
                <Image
                  src={"/assets/discord-icon.svg"}
                  width={30}
                  height={30}
                  alt="insta"
                />
              </Flex>
              <Flex
                as={Link}
                href="#"
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"full"}
                w="40px"
                h="40px"
                bg={"#ECFEFF"}
                mr={3}
              >
                <Image
                  src={"/assets/twitter-icon.svg"}
                  width={30}
                  height={30}
                  alt="insta"
                />
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDir={{ base: "column", md: "row" }}
          mb={10}
        >
          <Text fontWeight={"regular"} fontSize={{ base: "16px", md: "18px" }}>
            Copyright © 2023 Proglabs, All rights reserved
          </Text>
          <Flex mt={{ base: 2, md: 0 }}>
            <Link
              mr={6}
              href="#"
              fontWeight={"regular"}
              fontSize={{ base: "16px", md: "18px" }}
            >
              Terms of service
            </Link>
            <Link
              href="#"
              fontWeight={"regular"}
              fontSize={{ base: "16px", md: "18px" }}
            >
              Privacy policy
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

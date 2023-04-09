import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useToastHook from "@/components/Atoms/ToastHook";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSession } from "next-auth/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { storeData } from "@/lib/storeData";

export default function CourseModule({ image, module, isPremium, courseId }) {
  const [toast, setToast] = useToastHook();
  const { connected } = useWallet();
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = async (e) => {
    e.preventDefault();

    if (!connected || session === null) {
      // check if wallet connected
      return setToast({
        message: "Please connect wallet first",
        type: "warning",
      });
    }

    if (isPremium) {
      // check if user have membership

      return onOpen();
    }

    const enrollCourse = await storeData({
      endpoint: `/v1/courses/${courseId}/enroll`,
      method: "PUT",
      headers: {
        "x-auth-token": session?.accessToken,
      },
    });

    if (enrollCourse?.status) {
      return setToast({
        message: enrollCourse.message,
        type: "error",
      });
    }

    setToast({
      message: "Course enrolled",
      type: "success",
    });
    return router.push("/dashboard");
  };

  useEffect(() => {
    if (session) {
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/courses/${courseId}/enroll`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            "x-auth-token": session?.accessToken,
          },
        }
      )
        .then((response) => response.json())
        .then((data) =>
          data.data === null ? setEnrolled(false) : setEnrolled(true)
        )
        .catch((error) => console.error(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  return (
    <>
      <Flex w={"full"} mb={"40px"} flexWrap={"wrap"} justifyContent={"center"}>
        <Image
          maxW={{ base: "none", md: "2xl" }}
          h={"auto"}
          w={"full"}
          borderRadius={"24px"}
          src={image}
          alt="thumbnail"
          mr={{ base: 0, md: 10 }}
          mb={{ base: 5, md: 0 }}
        />
        <Flex
          flexDir={"column"}
          bg={"white"}
          px={{ base: "16px", md: "24px" }}
          py={4}
          borderRadius={"24px"}
          maxW={{ base: "none", md: "lg" }}
          w={"full"}
          justifyContent={"space-between"}
        >
          <Text
            fontWeight={"semiBold"}
            fontSize={{ base: "18px", md: "22px" }}
            mb={4}
          >
            {module.length} Course Modules
          </Text>
          <Box maxH={"200px"} w={"full"} overflowY={"auto"}>
            {module.map((m, i) => (
              <Flex
                bg={"#F6FBFF"}
                borderRadius={"12px"}
                p={4}
                mb={2}
                justifyContent={"space-between"}
                key={i}
              >
                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  fontWeight={"semiBold"}
                  noOfLines={1}
                  maxW={"70%"}
                >
                  {m.title}
                </Text>
                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  maxW={"30%"}
                  overflow={"hidden"}
                  fontWeight={"semiBold"}
                  whiteSpace={"nowrap"}
                >
                  {m._count.courseLessons} Lessons
                </Text>
              </Flex>
            ))}
          </Box>
          <Button
            mt={3}
            w={"full"}
            color={"textWhite"}
            bg={"backgroundTeal"}
            _hover={{ bg: "backgroundTealHover" }}
            borderRadius={"12px"}
            fontWeight={"bold"}
            fontSize={{ base: "18px", md: "22px" }}
            py={"24px"}
            onClick={handleEnroll}
            isDisabled={enrolled}
          >
            {enrolled ? "Course Enrolled" : "Enroll Course"}
          </Button>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"lg"}>
        <ModalOverlay />
        <ModalContent borderRadius={"24px"}>
          <ModalHeader
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ base: "22px", md: "24px" }}
          >
            No Progpass Detected
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex flexDir={"column"} alignItems={"center"}>
              <Image
                width="250"
                height="250"
                src={"/assets/not-found.svg"}
                alt="illus"
              />
              <Text
                mt={5}
                fontWeight="light"
                textAlign={"center"}
                fontSize={{ base: "16px", md: "18px" }}
              >
                Uh oh.. it seems you dont have any Proglabs NFT Membership.
              </Text>
              <Button
                mt={5}
                w={"full"}
                color={"textWhite"}
                bg={"backgroundTeal"}
                _hover={{ bg: "backgroundTealHover" }}
                borderRadius={"12px"}
                fontWeight={"bold"}
                fontSize={{ base: "16px", md: "18px" }}
                py={"22px"}
                href="/launchpad"
                as={NextLink}
              >
                Get NFT Membership
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

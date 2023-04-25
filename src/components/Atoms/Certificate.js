import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function Certificate({ name, image, title, completedAt }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        onClick={onOpen}
        flexDir={"column"}
        alignItems={"center"}
        mr={5}
        mb={5}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Box pos={"relative"}>
          <Image
            w={"full"}
            h={"auto"}
            maxW={"250px"}
            src={image ? image : "/assets/default-certi.png"}
            alt="cert"
            mb={3}
            borderRadius={"6px"}
          />
          <Text
            pos={"absolute"}
            w={"full"}
            textAlign={"center"}
            top={"42%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
          >
            {name}
          </Text>
        </Box>

        <Text fontWeight={"medium"} fontSize={"18px"}>
          {title}
        </Text>
        <Text fontSize={"16px"}>Earned {completedAt}</Text>
      </Flex>
      {/* modal */}
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        closeOnOverlayClick={false}
        size={"full"}
      >
        <ModalOverlay bg={"rgba(0, 0, 0, 0.8)"} backdropFilter="blur(10px)" />
        <ModalContent bg={"transparent"}>
          <ModalBody
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            mr={{ base: 4, md: 0 }}
          >
            <ModalCloseButton
              color={"white"}
              position={"absolute"}
              top={{ base: "25%", md: "9%" }}
              right={{ base: "10%", md: "24%" }}
              fontSize={"24px"}
            />
            <Box pos={"relative"}>
              <Image
                w={"full"}
                h={"auto"}
                maxW={"650px"}
                src={image ? image : "/assets/default-certi.png"}
                alt="cert"
                mb={3}
                borderRadius={"6px"}
              />
              <Text
                colot={"black"}
                pos={"absolute"}
                top={"45%"}
                fontSize={{ base: "20px", md: "28px" }}
                // right={{ base: "30%", md: "35%" }}
                w={"full"}
                textAlign={"center"}
                left={"50%"}
                transform={"translate(-50%, -50%)"}
              >
                {name}
              </Text>
            </Box>
            <Box mt={3}>
              <Text
                color={"white"}
                textAlign={"center"}
                fontWeight={"semiBold"}
                fontSize={{ base: "22px", md: "28px" }}
              >
                {title}
              </Text>
              <Text
                color={"white"}
                textAlign={"center"}
                fontWeight={"light"}
                fontSize={{ base: "16px", md: "18px" }}
              >
                Earned {completedAt}
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

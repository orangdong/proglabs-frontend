import DashboardLayout from "@/components/DashboardLayout";
import {
  Avatar,
  Text,
  Box,
  Icon,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Image,
} from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import { BsCamera } from "react-icons/bs";
import { useState } from "react";
import useToastHook from "@/components/Atoms/ToastHook";
import { storeData } from "@/lib/storeData";
import { fetchData } from "@/lib/fetchData";

export default function Profile({ user, session }) {
  const [userProfile, setUserProfile] = useState({
    name: user.name,
    walletAddress: user.walletAddress,
    email: user.email,
    avatar: user.avatar,
  });
  const [errorName, setErrorName] = useState(false);
  const [toast, setToast] = useToastHook();
  const [buttonLoading, setButtonLoading] = useState(false);
  const handleUpload = async () => {};
  const handleSubmit = async () => {
    if (!userProfile.name) {
      return setErrorName(true);
    }

    setButtonLoading(true);
    const user = await storeData({
      endpoint: `/v1/me`,
      method: "PUT",
      body: {
        name: userProfile.name,
        email: userProfile.email,
      },
      headers: {
        "x-auth-token": session?.accessToken,
      },
    });

    setButtonLoading(false);
    return setToast({ message: "User profile updated", type: "success" });
  };

  const cert = [
    {
      url: "https://simplecert.net/wp-content/uploads/2018/03/EM-Lab-Certificate-1.png",
      obtainedAt: "Apr 16, 2023",
      title: "Starter Course: Basic Javascript",
    },
    {
      url: "https://simplecert.net/wp-content/uploads/2018/03/EM-Lab-Certificate-1.png",
      obtainedAt: "Apr 16, 2023",
      title: "Advanced Javascript",
    },
    {
      url: "https://simplecert.net/wp-content/uploads/2018/03/EM-Lab-Certificate-1.png",
      obtainedAt: "Apr 16, 2023",
      title: "Getting Started With NodeJS",
    },
  ];

  return (
    <DashboardLayout title={"Profile"}>
      <Flex w={"full"} maxW={"2xl"} mx={"auto"} flexDir={"column"} my={5}>
        <Box mb={5}>
          <Text fontWeight={"semiBold"} fontSize={"22px"} mb={5}>
            User Profile
          </Text>
          <Flex>
            <Box
              position={"relative"}
              w={"fit-content"}
              onClick={handleUpload}
              _hover={{ cursor: "pointer" }}
            >
              <Avatar
                size={{ base: "xl", md: "2xl" }}
                src={userProfile.avatar}
              />
              <Flex
                pos={"absolute"}
                bg={"#E3E8F4"}
                w={{ base: "40px", md: "45px" }}
                h={{ base: "40px", md: "45px" }}
                borderRadius={"full"}
                right={"-5px"}
                alignItems={"center"}
                justifyContent={"center"}
                bottom={"-5px"}
              >
                <Icon boxSize={5} as={BsCamera} />
              </Flex>
            </Box>
            <Box ml={5} mt={3}>
              <Text fontSize={"18px"} fontWeight={"medium"}>
                Avatar
              </Text>
              <Text fontSize={"16px"} fontWeight={"light"}>
                2.5mb max size
              </Text>
            </Box>
          </Flex>
          <FormControl mt={5}>
            <FormLabel fontSize={"18px"} fontWeight={"medium"}>
              Email address
            </FormLabel>
            <Input
              borderRadius={"12px"}
              border={"none"}
              py={6}
              fontSize={"18px"}
              type="email"
              bg={"gray.100"}
              value={userProfile.email}
              onChange={(e) =>
                setUserProfile((curr) => ({
                  name: curr.name,
                  walletAddress: curr.walletAddress,
                  email: e.target.value,
                  avatar: curr.avatar,
                }))
              }
            />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel fontSize={"18px"} fontWeight={"medium"}>
              Wallet address
            </FormLabel>
            <Input
              borderRadius={"12px"}
              border={"none"}
              py={6}
              fontSize={"18px"}
              value={userProfile.walletAddress}
              bg={"gray.100"}
              isDisabled
              _hover={{
                cursor: "text",
              }}
            />
          </FormControl>
          <FormControl mt={5} isInvalid={errorName}>
            <FormLabel fontSize={"18px"} fontWeight={"medium"}>
              Name *
            </FormLabel>
            <Input
              borderRadius={"12px"}
              border={"none"}
              py={6}
              fontSize={"18px"}
              value={userProfile.name}
              bg={"gray.100"}
              onChange={(e) =>
                setUserProfile((curr) => ({
                  name: e.target.value,
                  walletAddress: curr.walletAddress,
                  email: curr.email,
                  avatar: curr.avatar,
                }))
              }
            />
            {errorName ? (
              <FormErrorMessage>Name is required.</FormErrorMessage>
            ) : (
              ""
            )}
          </FormControl>
          <Button
            fontWeight={"semibold"}
            color={"white"}
            bg={"backgroundTeal"}
            borderRadius={"12px"}
            px={"40px"}
            py={2}
            _hover={{
              bg: "backgroundTealHover",
            }}
            onClick={handleSubmit}
            fontSize="18px"
            mt={5}
            w={"fit-content"}
            isLoading={buttonLoading}
          >
            Save
          </Button>
        </Box>
        <Box>
          <Text fontWeight={"semiBold"} fontSize={"22px"} mb={5}>
            Certificates
          </Text>
          <Flex
            flexWrap={"wrap"}
            w={"full"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            {cert.map((c, i) => (
              <Flex
                key={i}
                flexDir={"column"}
                alignItems={"center"}
                mr={5}
                mb={5}
              >
                <Image
                  w={"full"}
                  h={"auto"}
                  maxW={"250px"}
                  src={c.url}
                  alt="cert"
                  mb={3}
                />
                <Text fontWeight={"medium"} fontSize={"18px"}>
                  {c.title}
                </Text>
                <Text fontSize={"16px"}>Earned {c.obtainedAt}</Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Flex>
    </DashboardLayout>
  );
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const data = await fetchData("/v1/me", {
    "x-auth-token": session.accessToken,
  });

  return {
    props: {
      user: data,
      session,
    },
  };
};

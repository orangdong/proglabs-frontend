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
import { useState, useRef } from "react";
import useToastHook from "@/components/Atoms/ToastHook";
import { storeData } from "@/lib/storeData";
import { fetchData } from "@/lib/fetchData";
import Certificate from "@/components/Atoms/Certificate";

export default function Profile({ user, session }) {
  const [userProfile, setUserProfile] = useState({
    name: user.name,
    walletAddress: user.walletAddress,
    email: user.email,
    avatar: user.avatar,
  });
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [toast, setToast] = useToastHook();
  const [buttonLoading, setButtonLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [uploadedAvatar, setUploadedAvatar] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // validate size
      const maxSize = 2.5 * 1024 * 1024;
      if (file.size > maxSize) {
        return setToast({ message: "File size max 2.5mb", type: "warning" });
      }
      // validate file type
      const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (!allowedFileTypes.includes(file.type)) {
        return setToast({
          message: "Only .png, .jpeg, .jpg allowed",
          type: "warning",
        });
      }

      setUploadedAvatar(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserProfile((curr) => ({
          ...curr,
          avatar: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!userProfile.name) {
        return setErrorName(true);
      }

      if (userProfile.email && !pattern.test(userProfile.email)) {
        return setErrorEmail(true);
      }
      const formData = new FormData();

      formData.append("name", userProfile.name);

      if (userProfile.email) {
        formData.append("email", userProfile.email);
      }

      if (uploadedAvatar) {
        formData.append("avatar", uploadedAvatar);
      }

      setButtonLoading(true);

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/me`, {
        body: formData,
        headers: {
          "x-auth-token": session?.accessToken,
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
        method: "PUT",
      });

      setButtonLoading(false);
      return setToast({ message: "User profile updated", type: "success" });
    } catch (error) {
      return setToast({ message: "Something went wrong", type: "error" });
    }
  };

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
              onClick={() => fileInputRef.current.click()}
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
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={(e) => handleFileChange(e)}
              />
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
          <FormControl mt={5} isInvalid={errorEmail}>
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
            {errorEmail ? (
              <FormErrorMessage>Invalid email.</FormErrorMessage>
            ) : (
              ""
            )}
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
            {user.userCourses.filter(
              (uc) => uc.isComplete && uc.course.isPremium
            ).length < 1 ? (
              <Text fontSize={"18px"}>No certificate</Text>
            ) : (
              user.userCourses
                .filter((uc) => uc.isComplete && uc.course.isPremium)
                .map((c, i) => (
                  <Certificate
                    key={i}
                    title={c.course.title}
                    name={userProfile.name}
                    image={c.course.certificate}
                    completedAt={c.completedAt}
                  />
                ))
            )}
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

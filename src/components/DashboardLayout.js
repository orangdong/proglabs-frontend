import useAuth from "@/lib/useAuth";
import Head from "next/head";
import Sidebar from "./Molecules/Sidebar";
import { Flex, Box, Text } from "@chakra-ui/react";

export default function DashboardLayout({ title, children }) {
  const isAuthenticated = useAuth(true);
  return (
    <>
      <Head>
        <title>{`Proglabs | ${title}`}</title>
        <meta name="description" content="Enchance your learning experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Flex
          w={"100vw"}
          h={"100vh"}
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <Sidebar />
          <Box h={"full"} w={"full"} py={5} px={{ base: 4, md: 5 }}>
            <Text fontSize={"28px"} fontWeight={"bold"} mb={3}>
              {title}
            </Text>
            <Box
              boxShadow="sm"
              bg={"white"}
              w={"full"}
              borderRadius={"24px"}
              py={5}
              px={{ base: 4, md: 5 }}
            >
              {children}
            </Box>
          </Box>
        </Flex>
      </main>
    </>
  );
}

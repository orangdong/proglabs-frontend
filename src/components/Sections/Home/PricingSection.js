import HighlightedText from "@/components/Atoms/HighlightedText";
import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
} from "@chakra-ui/react";
import { FiX, FiCheck } from "react-icons/fi";
const tableContent = [
  {
    perks: "Free course access",
    regular: true,
    membership: true,
  },
  {
    perks: "Premium course access",
    regular: false,
    membership: true,
  },
  {
    perks: "Exclusive learning community",
    regular: false,
    membership: true,
  },
  {
    perks: "Early access to all upcoming courses",
    regular: false,
    membership: true,
  },
  {
    perks: "Course certificate",
    regular: false,
    membership: true,
  },
  {
    perks: "1 on 1 expert session",
    regular: false,
    membership: true,
  },
  {
    perks: "Priority customer support",
    regular: false,
    membership: true,
  },
  {
    perks: "Cook you a nice seafood dinner",
    regular: false,
    membership: false,
  },
];

export default function PricingSection() {
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
          mt={"92px"}
          mb={"92px"}
          flexDir={"column"}
          alignItems={"center"}
          w={"full"}
        >
          <Box
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ base: 36, md: 48 }}
            mb={4}
          >
            <HighlightedText
              text={"Choose Your"}
              highlightW={{ base: "200px", md: "270px" }}
              highlight={
                "linear-gradient(90.07deg, #4FF5D2 38.95%, rgba(255, 255, 255, 0) 117.98%)"
              }
            />{" "}
            Plan 💎
          </Box>
          <Text
            textAlign={"center"}
            fontSize={{ base: "18px", md: "22px" }}
            color={"textGray"}
            mb={"60px"}
          >
            Pick the plan that works best for you
          </Text>
          <TableContainer
            w={"full"}
            overflowX={{ base: "hidden", md: "auto" }}
            maxW={{ base: "100vw", md: "1064px" }}
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th
                    color={"#293F48"}
                    textTransform={"none"}
                    fontWeight="bold"
                    fontSize={{ base: "18px", md: "22px" }}
                    borderColor={"#c4c4c4"}
                    letterSpacing={"normal"}
                    py={{ base: "16px", md: "24px" }}
                    minW={{ base: "none", md: "430px" }}
                    maxW={"30vw"}
                  >
                    Perks
                  </Th>
                  <Th
                    color={"#293F48"}
                    textTransform={"none"}
                    fontWeight="bold"
                    fontSize={{ base: "18px", md: "22px" }}
                    borderColor={"#c4c4c4"}
                    letterSpacing={"normal"}
                    py={{ base: "16px", md: "24px" }}
                    textAlign={"center"}
                    whiteSpace={"normal"}
                    overflow={"hidden"}
                    maxW={"30vw"}
                  >
                    Regular
                  </Th>
                  <Th
                    color={"#293F48"}
                    textTransform={"none"}
                    fontWeight="bold"
                    fontSize={{ base: "18px", md: "22px" }}
                    letterSpacing={"normal"}
                    borderColor={"#c4c4c4"}
                    py={{ base: "16px", md: "24px" }}
                    textAlign={"center"}
                    whiteSpace={"normal"}
                    overflow={"hidden"}
                    maxW={"30vw"}
                  >
                    NFT Membership
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {tableContent.map((tc, i) => (
                  <Tr key={i}>
                    <Td
                      borderColor={"#c4c4c4"}
                      py={{ base: "16px", md: "24px" }}
                      fontSize={{ base: "16px", md: "18px" }}
                      color={"textGray"}
                      whiteSpace={"normal"}
                      overflow={"hidden"}
                    >
                      {tc.perks}
                    </Td>
                    <Td
                      borderColor={"#c4c4c4"}
                      py="24px"
                      fontSize={{ base: "16px", md: "18px" }}
                      color={"textGray"}
                      textAlign={"center"}
                      whiteSpace={"normal"}
                      overflow={"hidden"}
                    >
                      {tc.regular ? (
                        <Icon
                          color={"#293F48"}
                          as={FiCheck}
                          boxSize={{ base: "30px", md: "40px" }}
                        />
                      ) : (
                        <Icon
                          as={FiX}
                          color={"#C4C4C4"}
                          boxSize={{ base: "30px", md: "40px" }}
                        />
                      )}
                    </Td>
                    <Td
                      borderColor={"#c4c4c4"}
                      py="24px"
                      fontSize={{ base: "16px", md: "18px" }}
                      color={"textGray"}
                      textAlign={"center"}
                      whiteSpace={"normal"}
                      overflow={"hidden"}
                    >
                      {tc.membership ? (
                        <Icon
                          color={"#293F48"}
                          as={FiCheck}
                          boxSize={{ base: "30px", md: "40px" }}
                        />
                      ) : (
                        <Icon
                          as={FiX}
                          color={"#C4C4C4"}
                          boxSize={{ base: "30px", md: "40px" }}
                        />
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Box>
  );
}

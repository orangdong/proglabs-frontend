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
          <TableContainer w={"full"} maxW={"1064px"}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th
                    color={"#293F48"}
                    textTransform={"none"}
                    fontWeight="bold"
                    fontSize={"22px"}
                    borderColor={"#c4c4c4"}
                    letterSpacing={"normal"}
                    py={"24px"}
                    minW={"430px"}
                  >
                    Perks
                  </Th>
                  <Th
                    color={"#293F48"}
                    textTransform={"none"}
                    fontWeight="bold"
                    fontSize={"22px"}
                    borderColor={"#c4c4c4"}
                    letterSpacing={"normal"}
                    py={"24px"}
                    textAlign={"center"}
                  >
                    Regular
                  </Th>
                  <Th
                    color={"#293F48"}
                    textTransform={"none"}
                    fontWeight="bold"
                    fontSize={"22px"}
                    letterSpacing={"normal"}
                    borderColor={"#c4c4c4"}
                    py={"24px"}
                    textAlign={"center"}
                  >
                    NFT Membership
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                  >
                    Free course access
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon color={"#293F48"} as={FiCheck} boxSize={"40px"} />
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon color={"#293F48"} as={FiCheck} boxSize={"40px"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                  >
                    Premium course access
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon as={FiX} color={"#C4C4C4"} boxSize={"40px"} />
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon color={"#293F48"} as={FiCheck} boxSize={"40px"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                  >
                    Exclusive learning community
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon as={FiX} color={"#C4C4C4"} boxSize={"40px"} />
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon color={"#293F48"} as={FiCheck} boxSize={"40px"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                  >
                    Early access to all upcoming courses
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon as={FiX} color={"#C4C4C4"} boxSize={"40px"} />
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon color={"#293F48"} as={FiCheck} boxSize={"40px"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                  >
                    Course certificate
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon as={FiX} color={"#C4C4C4"} boxSize={"40px"} />
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon color={"#293F48"} as={FiCheck} boxSize={"40px"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                  >
                    1 on 1 expert session
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon as={FiX} color={"#C4C4C4"} boxSize={"40px"} />
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon color={"#293F48"} as={FiCheck} boxSize={"40px"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                  >
                    Priority customer support
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon as={FiX} color={"#C4C4C4"} boxSize={"40px"} />
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon color={"#293F48"} as={FiCheck} boxSize={"40px"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                  >
                    Cook you a nice seafood dinner
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon as={FiX} color={"#C4C4C4"} boxSize={"40px"} />
                  </Td>
                  <Td
                    borderColor={"#c4c4c4"}
                    py="24px"
                    fontSize={"18px"}
                    color={"textGray"}
                    textAlign={"center"}
                  >
                    <Icon as={FiX} color={"#C4C4C4"} boxSize={"40px"} />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Box>
  );
}

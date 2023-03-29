/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { FiArrowRight, FiSearch, FiMoon, FiSun, FiUser } from "react-icons/fi";
import Navlink from "../Atoms/Navlink";
import { useState, useEffect, useMemo } from "react";
import NextLink from "next/link";
import WalletModal from "../Atoms/WalletModal";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Navbar({ course = [] }) {
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isWalletOpen,
    onOpen: onWalletOpen,
    onClose: onWalletClose,
  } = useDisclosure();
  const { publicKey, disconnect, connected } = useWallet();
  const [isDark, setIsDark] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState();

  const toggleDarkMode = () => {
    // const colorMode = localStorage.getItem("chakra-ui-color-mode");
    // if (colorMode === "dark") {
    //    setIsDark(false);
    //   // return localStorage.setItem("chakra-ui-color-mode", "light");
    // }
    // setIsDark(true);
    // return localStorage.setItem("chakra-ui-color-mode", "dark");
    if (isDark) {
      return setIsDark(false);
    }
    return setIsDark(true);
  };

  // useEffect(() => {
  //   setIsDark(
  //     localStorage.getItem("chakra-ui-color-mode") === "dark" ? true : false
  //   );
  // }, []);

  // searching
  const filteredItem = useMemo(() => {
    if (course && course.length > 0) {
      return course.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    return [];
  }, [search, course]);
  return (
    <>
      <Box bg={"#091F2A"} h={"40px"} position={"sticky"} top={0} zIndex={10}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          h={"full"}
          maxW={"1280px"}
          w={"full"}
          mx={"auto"}
          px={4}
        >
          <Link
            href="#"
            color={"#c4c4c4"}
            fontWeight={"medium"}
            fontSize={{ base: "12px", md: "16px" }}
            display={"flex"}
            alignItems={"center"}
          >
            <Text>Enjoy our brand new membership! Register</Text>
            <Icon ml={1} as={FiArrowRight} />
          </Link>
          <Link
            href="#"
            color={"#c4c4c4"}
            fontWeight={"medium"}
            fontSize={{ base: "12px", md: "16px" }}
          >
            We&apos;re Hiring
          </Link>
        </Flex>
      </Box>
      <Box
        position={"sticky"}
        top={"40px"}
        zIndex={10}
        boxShadow="sm"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Flex
          maxW={"1280px"}
          w={"full"}
          mx={"auto"}
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 3 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Box as={NextLink} href="/" display={{ base: "none", md: "block" }}>
              <Image
                src="/assets/logo-black.svg"
                alt="logo"
                width="190"
                height="52"
              />
            </Box>
            <Flex
              alignItems={"center"}
              display={{ base: "none", md: "flex" }}
              ml={10}
              position="relative"
            >
              <InputGroup
                borderColor={"#E3E8F4"}
                w={"full"}
                maxW={"385px"}
                mr={3}
                borderRadius={"10px"}
              >
                <InputLeftElement pointerEvents="none">
                  <Icon
                    mt={2}
                    color={"#656F78"}
                    h={"24px"}
                    w={"24px"}
                    as={FiSearch}
                  />
                </InputLeftElement>
                <Input
                  size="lg"
                  color={"#656F78"}
                  placeholder="Search course"
                  onFocus={() => setToggleSearch(true)}
                  value={search}
                  onBlur={() => {
                    setToggleSearch(false);
                    setSearch("");
                  }}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </InputGroup>
              <DesktopNav />
              <Box
                maxH="250px"
                minH="250px"
                w="700px"
                bg="white"
                position="absolute"
                top="70px"
                zIndex={10}
                borderRadius="10px"
                display={{ base: "none", md: toggleSearch ? "block" : "none" }}
                px={4}
                py={4}
                overflowY={"auto"}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Text fontWeight="semiBold" fontSize="18px">
                  What course do you like?
                </Text>
                <Flex
                  mt={5}
                  flexDir={"column"}
                  justifyContent="center"
                  alignItems="center"
                  w={"full"}
                  h={"full"}
                  minH={"200px"}
                  overflowY={"auto"}
                >
                  {filteredItem.length < 1 ? (
                    <Text
                      fontWeight="semiBold"
                      textAlign="center"
                      my="auto"
                      fontSize="18px"
                    >
                      No Item Found
                    </Text>
                  ) : (
                    filteredItem.map((c, i) => (
                      <Flex
                        w={"full"}
                        mb={5}
                        p={3}
                        _hover={{
                          background: "#E4E4E4",
                        }}
                        borderRadius={"8px"}
                        as={NextLink}
                        href={`/courses/${c.id}`}
                        key={i}
                      >
                        <img
                          src={c.thumbnail}
                          alt="thumbnail"
                          height="50"
                          width="100"
                          style={{ borderRadius: "4px" }}
                        />
                        <Box ml={3}>
                          <Text
                            mb={1}
                            fontWeight={"semiBold"}
                            fontSize={"18px"}
                          >
                            {c.title}
                          </Text>
                          <Text>{c.isPremium ? "Premium" : "Free"}</Text>
                        </Box>
                      </Flex>
                    ))
                  )}
                </Flex>
              </Box>
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={3}
          >
            <IconButton
              bg={"white"}
              aria-label="toggle mode"
              _hover={{ bg: "#E3E8F4" }}
              fontSize="24px"
              px={2}
              py={2}
              icon={isDark ? <FiSun /> : <FiMoon />}
              onClick={toggleDarkMode}
              borderRadius={"10px"}
            />
            {connected ? (
              <>
                <Box>
                  <Menu>
                    <MenuButton
                      _hover={{ bg: "#E3E8F4" }}
                      bg={"white"}
                      px={2}
                      borderRadius={"10px"}
                      display={{ base: "none", md: "flex" }}
                      justifyContent={"center"}
                    >
                      <Icon boxSize={6} mt={1} as={FiUser} />
                    </MenuButton>
                    <MenuList mt={5}>
                      <MenuItem
                        _hover={{
                          bg: "transparent",
                          cursor: "default",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                      >
                        {publicKey?.toString().slice(0, 6) +
                          "..." +
                          publicKey?.toString().slice(-4)}
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setSelected(null);
                          disconnect();
                        }}
                      >
                        Disconnect
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Button
                  fontWeight={"semibold"}
                  color={"white"}
                  bg={"backgroundTeal"}
                  borderRadius={"10px"}
                  px={3}
                  py={2}
                  _hover={{
                    bg: "backgroundTealHover",
                  }}
                  fontSize="18px"
                  as={NextLink}
                  href="/dashboard"
                >
                  Dashboard
                </Button>
              </>
            ) : (
              <>
                <Button
                  fontWeight={"semibold"}
                  color={"white"}
                  bg={"backgroundTeal"}
                  borderRadius={"10px"}
                  px={3}
                  py={2}
                  _hover={{
                    bg: "backgroundTealHover",
                  }}
                  fontSize="18px"
                  onClick={onWalletOpen}
                >
                  Connect Wallet
                </Button>
              </>
            )}
            <WalletModal
              size={"xl"}
              isOpen={isWalletOpen}
              onClose={onWalletClose}
              borderRadius={"24px"}
              selected={selected}
              setSelected={setSelected}
            />
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={3}>
      {NAV_ITEMS.map((navItem) => (
        <Navlink
          key={navItem.label}
          label={navItem.label}
          navigation={navItem.href}
        />
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <MobileNavItem label={"Home"} href="/" />
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Launchpad",
    href: "/launchpad",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "About",
    href: "/about",
  },
];

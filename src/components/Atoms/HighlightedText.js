import { Box } from "@chakra-ui/react";
export default function HighlightedText({ text, highlight }) {
  return (
    <Box display="inline" position="relative">
      <Box display={"inline"} zIndex={1}>
        {text}
      </Box>
      <Box
        position={"absolute"}
        zIndex={-10}
        transform={"rotate(-1deg)"}
        bgGradient={highlight}
        w={"438px"}
        h={"37px"}
        top={5}
        left={0}
      />
    </Box>
  );
}

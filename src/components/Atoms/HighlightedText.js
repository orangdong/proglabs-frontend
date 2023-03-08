import { Box } from "@chakra-ui/react";
export default function HighlightedText({
  text,
  highlight,
  highlightW = "438px",
  highlightH = "37px",
}) {
  return (
    <Box display="inline" position="relative" whiteSpace={"nowrap"}>
      <Box display={"inline"} zIndex={1}>
        {text}
      </Box>
      <Box
        position={"absolute"}
        zIndex={-10}
        transform={"rotate(-1deg)"}
        bgGradient={highlight}
        w={highlightW}
        h={highlightH}
        top={5}
        left={0}
      />
    </Box>
  );
}

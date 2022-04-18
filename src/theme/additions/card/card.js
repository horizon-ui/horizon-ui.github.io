import { mode } from "@chakra-ui/theme-tools";
const Card = {
  baseStyle: (props) => ({
    p: "20px 20px 30px 20px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    boxShadow: mode(
      "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
      "unset"
    )(props),
    borderRadius: "30px",
    minWidth: "0px",
    wordWrap: "break-word",
    bg: mode("#ffffff", "#1C1F39")(props),
    backgroundClip: "border-box",
  }),
  variants: {
    panel: (props) => ({
      bg: props.colorMode === "dark" ? "gray.700" : "white",
      width: "100%",
      boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
      borderRadius: "30px",
    }),
  },
};

export const CardComponent = {
  components: {
    Card,
  },
};

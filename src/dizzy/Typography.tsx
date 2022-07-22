import { styled } from "./stitches.config";

export const Typography = styled("span", {
  display: "block",
  fontFamily: "$fonts$primary",
  variants: {
    size: {
      xs: {
        fs: "xs",
        marginTop: "-1px",
      },
      sm: {
        fs: "sm",
        marginTop: "-1px",
      },
      md: {
        fs: "md",
        marginTop: "0px",
      },
      lg: {
        fs: "lg",
        marginTop: "0px",
      },
      xl: {
        fs: "xl",
        marginTop: "0px",
      },
    },
    color: {
      neutral50: {
        color: "$colors$neutral50",
      },
      neutral100: {
        color: "$colors$neutral100",
      },
      neutral200: {
        color: "$colors$neutral200",
      },
      neutral300: {
        color: "$colors$neutral300",
      },
      neutral400: {
        color: "$colors$neutral400",
      },
      neutral500: {
        color: "$colors$neutral500",
      },
      neutral600: {
        color: "$colors$neutral600",
      },
      neutral700: {
        color: "$colors$neutral700",
      },
      neutral800: {
        color: "$colors$neutral800",
      },
      neutral900: {
        color: "$colors$neutral900",
      },
      primary50: {
        color: "$colors$primary50",
      },
      primary100: {
        color: "$colors$primary100",
      },
      primary200: {
        color: "$colors$primary200",
      },
      primary300: {
        color: "$colors$primary300",
      },
      primary400: {
        color: "$colors$primary400",
      },
      primary500: {
        color: "$colors$primary500",
      },
      primary600: {
        color: "$colors$primary600",
      },
      primary700: {
        color: "$colors$primary700",
      },
      primary800: {
        color: "$colors$primary800",
      },
      primary900: {
        color: "$colors$primary900",
      },
      blue50: {
        color: "$colors$blue50",
      },
      blue100: {
        color: "$colors$blue100",
      },
      blue200: {
        color: "$colors$blue200",
      },
      blue300: {
        color: "$colors$blue300",
      },
      blue400: {
        color: "$colors$blue400",
      },
      blue500: {
        color: "$colors$blue500",
      },
      blue600: {
        color: "$colors$blue600",
      },
      blue700: {
        color: "$colors$blue700",
      },
      blue800: {
        color: "$colors$blue800",
      },
      blue900: {
        color: "$colors$blue900",
      },
      orange50: {
        color: "$colors$orange50",
      },
      orange100: {
        color: "$colors$orange100",
      },
      orange200: {
        color: "$colors$orange200",
      },
      orange300: {
        color: "$colors$orange300",
      },
      orange400: {
        color: "$colors$orange400",
      },
      orange500: {
        color: "$colors$orange500",
      },
      orange600: {
        color: "$colors$orange600",
      },
      orange700: {
        color: "$colors$orange700",
      },
      orange800: {
        color: "$colors$orange800",
      },
      orange900: {
        color: "$colors$orange900",
      },
    },
    bold: {
      true: {
        fontWeight: "bold",
      },
      false: {
        ":is(&)": {
          fontWeight: "normal",
        },
      },
    },
  },
  defaultVariants: {
    size: "sm",
    bold: false,
  },
});

import { styled } from "./stitches.config";

export const IconButton = styled("button", {
  borderRadius: "$radii$xs",
  borderWidth: "1px",
  borderColor: "$colors$neutral500",
  fontSize: 0,
  variants: {
    round: {
      true: {
        borderRadius: "$radii$circular",
      },
    },
    variant: {
      contained: {},
      outline: {},
      subtle: {},
      ghost: {},
    },
    color: {
      neutral: {},
      primary: {},
      blue: {},
      orange: {},
    },
    size: {
      sm: {
        padding: "$space$2",
      },
      md: {
        padding: "$space$2",
      },
      lg: {
        padding: "$space$2",
      },
    },
  },
  compoundVariants: [
    {
      css: {
        backgroundColor: "$colors$neutral500",
        borderColor: "$colors$neutral500",
        color: "white",
        "&:hover": {
          backgroundColor: "$colors$neutral600",
          borderColor: "$colors$neutral600",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$neutralA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$neutral700",
          borderColor: "$colors$neutral700",
        },
      },
      color: "neutral",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$colors$primary500",
        borderColor: "$colors$primary500",
        color: "white",
        "&:hover": {
          backgroundColor: "$colors$primary600",
          borderColor: "$colors$primary600",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$primaryA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$primary700",
          borderColor: "$colors$primary700",
        },
      },
      color: "primary",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$colors$blue500",
        borderColor: "$colors$blue500",
        color: "white",
        "&:hover": {
          backgroundColor: "$colors$blue600",
          borderColor: "$colors$blue600",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$blueA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$blue700",
          borderColor: "$colors$blue700",
        },
      },
      color: "blue",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$colors$orange500",
        borderColor: "$colors$orange500",
        color: "white",
        "&:hover": {
          backgroundColor: "$colors$orange600",
          borderColor: "$colors$orange600",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$orangeA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$orange700",
          borderColor: "$colors$orange700",
        },
      },
      color: "orange",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$background",
        borderColor: "$colors$neutral500",
        color: "$colors$neutral600",
        "&:hover": {
          backgroundColor: "$colors$neutral50",
          color: "$colors$neutral700",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$neutralA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$neutral100",
          color: "$colors$neutral700",
        },
      },
      color: "neutral",
      variant: "outline",
    },
    {
      css: {
        backgroundColor: "$background",
        borderColor: "$colors$primary500",
        color: "$colors$primary600",
        "&:hover": {
          backgroundColor: "$colors$primary50",
          color: "$colors$primary700",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$primaryA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$primary100",
          color: "$colors$primary700",
        },
      },
      color: "primary",
      variant: "outline",
    },
    {
      css: {
        backgroundColor: "$background",
        borderColor: "$colors$blue500",
        color: "$colors$blue600",
        "&:hover": {
          backgroundColor: "$colors$blue50",
          color: "$colors$blue700",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$blueA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$blue100",
          color: "$colors$blue700",
        },
      },
      color: "blue",
      variant: "outline",
    },
    {
      css: {
        backgroundColor: "$background",
        borderColor: "$colors$orange500",
        color: "$colors$orange600",
        "&:hover": {
          backgroundColor: "$colors$orange50",
          color: "$colors$orange700",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$orangeA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$orange100",
          color: "$colors$orange700",
        },
      },
      color: "orange",
      variant: "outline",
    },
    {
      css: {
        backgroundColor: "$colors$neutral200",
        borderColor: "$colors$neutral300",
        color: "$colors$neutral800",
        "&:hover": {
          backgroundColor: "$colors$neutral300",
          borderColor: "$colors$neutral300",
          color: "$colors$neutral800",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$neutralA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$neutral400",
          borderColor: "$colors$neutral400",
          color: "$colors$neutral900",
        },
      },
      color: "neutral",
      variant: "subtle",
    },
    {
      css: {
        backgroundColor: "$colors$primary200",
        borderColor: "$colors$primary300",
        color: "$colors$primary700",
        "&:hover": {
          backgroundColor: "$colors$primary300",
          borderColor: "$colors$primary300",
          color: "$colors$primary700",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$primaryA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$primary400",
          borderColor: "$colors$primary400",
          color: "$colors$primary900",
        },
      },
      color: "primary",
      variant: "subtle",
    },
    {
      css: {
        backgroundColor: "$colors$blue200",
        borderColor: "$colors$blue300",
        color: "$colors$blue700",
        "&:hover": {
          backgroundColor: "$colors$blue300",
          borderColor: "$colors$blue300",
          color: "$colors$blue700",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$blueA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$blue400",
          borderColor: "$colors$blue400",
          color: "$colors$blue900",
        },
      },
      color: "blue",
      variant: "subtle",
    },
    {
      css: {
        backgroundColor: "$colors$orange200",
        borderColor: "$colors$orange300",
        color: "$colors$orange700",
        "&:hover": {
          backgroundColor: "$colors$orange300",
          borderColor: "$colors$orange300",
          color: "$colors$orange700",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$orangeA50",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$orange400",
          borderColor: "$colors$orange400",
          color: "$colors$orange900",
        },
      },
      color: "orange",
      variant: "subtle",
    },
    {
      css: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "$foreground",
        "&:hover": {
          backgroundColor: "$colors$neutral200",
          color: "$foreground",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$neutralA25",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$neutral300",
          color: "$foreground",
        },
      },
      color: "neutral",
      variant: "ghost",
    },
    {
      css: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "$colors$primary500",
        "&:hover": {
          backgroundColor: "$colors$primary200",
          color: "$colors$primary600",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$primaryA25",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$primary300",
          color: "$colors$primary700",
        },
      },
      color: "primary",
      variant: "ghost",
    },
    {
      css: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "$colors$blue500",
        "&:hover": {
          backgroundColor: "$colors$blue200",
          color: "$colors$blue600",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$blueA25",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$blue300",
          color: "$colors$blue700",
        },
      },
      color: "blue",
      variant: "ghost",
    },
    {
      css: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "$colors$orange500",
        "&:hover": {
          backgroundColor: "$colors$orange200",
          color: "$colors$orange600",
        },
        "&:focus-visible": {
          outline: "3px solid $colors$orangeA25",
          outlineOffset: "0px",
        },
        "&:active": {
          backgroundColor: "$colors$orange300",
          color: "$colors$orange700",
        },
      },
      color: "orange",
      variant: "ghost",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "neutral",
    variant: "contained",
  },
});

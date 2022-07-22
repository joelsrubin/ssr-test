import { styled } from "./stitches.config";

export const Textarea = styled("textarea", {
  borderRadius: "$radii$xs",
  variants: {
    size: {
      sm: {
        fontSize: "$fontSizes$xs",
        lineHeight: "$lineHeights$xs",
        padding: "$space$2",
      },
      md: {
        fontSize: "$fontSizes$sm",
        lineHeight: "$lineHeights$sm",
        padding: "$space$2",
      },
      lg: {
        fontSize: "$fontSizes$md",
        lineHeight: "$lineHeights$md",
        padding: "$space$2",
      },
    },
    color: {
      neutral: {},
      primary: {},
      blue: {},
      orange: {},
    },
    variant: {
      outline: {},
      fill: {
        backgroundColor: "$colors$neutral100",
        "&::placeholder": {
          color: "$colors$neutral500",
        },
      },
      flush: {
        borderRadius: 0,
        borderBottom: "2px solid $colors$neutral300",
        paddingInline: 0,
        "&::placeholder": {
          color: "$colors$neutral400",
        },
        "&:focus": {
          outline: "none",
          borderBottomColor: "$colors$neutral400",
        },
      },
      unstyled: {
        border: "none",
        padding: 0,
        "&::placeholder": {
          color: "$colors$neutral400",
        },
        "&:focus": {
          outline: "none",
        },
      },
    },
  },
  compoundVariants: [
    {
      css: {
        border: "1px solid $colors$neutral300",
      },
      color: "neutral",
      variant: "outline",
    },
    {
      css: {
        border: "1px solid $colors$primary300",
      },
      color: "primary",
      variant: "outline",
    },
    {
      css: {
        border: "1px solid $colors$blue300",
      },
      color: "blue",
      variant: "outline",
    },
    {
      css: {
        border: "1px solid $colors$orange300",
      },
      color: "orange",
      variant: "outline",
    },
    {
      css: {
        backgroundColor: "$colors$neutral100",
        "&::placeholder": {
          color: "$colors$neutral400",
        },
      },
      color: "neutral",
      variant: "fill",
    },
    {
      css: {
        backgroundColor: "$colors$primary100",
        "&::placeholder": {
          color: "$colors$primary400",
        },
      },
      color: "primary",
      variant: "fill",
    },
    {
      css: {
        backgroundColor: "$colors$blue100",
        "&::placeholder": {
          color: "$colors$blue400",
        },
      },
      color: "blue",
      variant: "fill",
    },
    {
      css: {
        backgroundColor: "$colors$orange100",
        "&::placeholder": {
          color: "$colors$orange400",
        },
      },
      color: "orange",
      variant: "fill",
    },
    {
      css: {
        borderBottom: "2px solid $colors$neutral300",
        "&:focus": {
          borderBottomColor: "$colors$neutral400",
        },
      },
      color: "neutral",
      variant: "flush",
    },
    {
      css: {
        borderBottom: "2px solid $colors$primary300",
        "&:focus": {
          borderBottomColor: "$colors$primary400",
        },
      },
      color: "primary",
      variant: "flush",
    },
    {
      css: {
        borderBottom: "2px solid $colors$blue300",
        "&:focus": {
          borderBottomColor: "$colors$blue400",
        },
      },
      color: "blue",
      variant: "flush",
    },
    {
      css: {
        borderBottom: "2px solid $colors$orange300",
        "&:focus": {
          borderBottomColor: "$colors$orange400",
        },
      },
      color: "orange",
      variant: "flush",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "neutral",
    variant: "outline",
  },
});

import { styled, VariantProps, CSS } from "./stitches.config";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  ElementRef,
} from "react";

const InputWrapper = styled("div", {
  borderRadius: "$radii$xs",
  lineHeight: "normal",
  borderWidth: "1px",
  elevation: "none",
  "& input": {
    backgroundColor: "transparent",
    display: "block",
    width: "100%",
    padding: 0,
    lineHeight: "normal",
  },
  "& input:focus": {
    outline: "none",
  },
  "&:focus-within": {
    elevation: "none",
  },
  variants: {
    round: {
      true: {
        borderRadius: "$radii$round",
      },
    },
    size: {
      xs: {
        "& input": {
          paddingBlock: "var(--space-1)",
          paddingInline: "$space$2",
        },
      },
      sm: {
        "& input": {
          paddingBlock: "var(--space-2)",
          paddingInline: "$space$3",
        },
      },
      md: {
        "& input": {
          paddingBlock: "var(--space-4)",
          paddingInline: "$space$5",
        },
      },
      lg: {
        "& input": {
          paddingBlock: "var(--space-6)",
          paddingInline: "$space$6",
        },
      },
      xl: {
        "& input": {
          paddingBlock: "var(--space-8)",
          paddingInline: "$space$8",
        },
      },
    },
    typeSize: {
      xs: {
        fontSize: "$fontSizes$xs",
        "& input": {
          marginTop: "-1px",
        },
      },
      sm: {
        fontSize: "$fontSizes$sm",
        "& input": {
          marginTop: "-1px",
        },
      },
      md: {
        fontSize: "$fontSizes$md",
        "& input": {
          marginTop: "0px",
        },
      },
      lg: {
        fontSize: "$fontSizes$lg",
        "& input": {
          marginTop: "0px",
        },
      },
      xl: {
        fontSize: "$fontSizes$xl",
        "& input": {
          marginTop: "0px",
        },
      },
    },
    color: {
      neutral: {},
      primary: {},
      blue: {},
      orange: {},
    },
    variant: {
      outline: {
        backgroundColor: "$background",
        "& input": {
          color: "$foreground",
        },
        "& input::placeholder": {
          color: "$colors$neutral500",
        },
      },
      fill: {},
      contained: {},
      flush: {
        borderRadius: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: "2px",
        borderColor: "transparent transparent $colors$neutral500 transparent",
        paddingInline: 0,
        elevation: "none",
        "& input::placeholder": {
          color: "$colors$neutral400",
        },
        "&:focus-within": {
          outline: "none",
          borderBottomColor: "$colors$neutral400",
        },
      },
      unstyled: {
        borderColor: "transparent",
        paddingInline: 0,
        elevation: "none",
        "&::placeholder": {
          color: "$colors$neutral400",
        },
        "&:focus-within": {
          outline: "none",
        },
      },
    },
  },
  compoundVariants: [
    {
      css: {
        borderColor: "$colors$neutral300",
        "&:focus-within": {
          borderColor: "$colors$neutral500",
        },
      },
      color: "neutral",
      variant: "outline",
    },
    {
      css: {
        borderColor: "$colors$primary300",
        "&:focus-within": {
          borderColor: "$colors$primary500",
        },
      },
      color: "primary",
      variant: "outline",
    },
    {
      css: {
        borderColor: "$colors$blue300",
        "&:focus-within": {
          borderColor: "$colors$blue500",
        },
      },
      color: "blue",
      variant: "outline",
    },
    {
      css: {
        borderColor: "$colors$orange300",
        "&:focus-within": {
          borderColor: "$colors$orange500",
        },
      },
      color: "orange",
      variant: "outline",
    },
    {
      css: {
        backgroundColor: "$colors$neutral500",
        borderColor: "$colors$neutral500",
        "& input": {
          color: "white",
        },
        "& input::placeholder": {
          color: "$colors$neutral50",
        },
        "&:hover": {
          backgroundColor: "$colors$neutral600",
          borderColor: "$colors$neutral600",
        },
        "&:focus-within": {
          backgroundColor: "$colors$neutral600",
          borderColor: "$colors$neutral600",
        },
      },
      color: "neutral",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$colors$primary500",
        borderColor: "$colors$primary500",
        "& input": {
          color: "white",
        },
        "& input::placeholder": {
          color: "$colors$primary50",
        },
        "&:hover": {
          backgroundColor: "$colors$primary600",
          borderColor: "$colors$primary600",
        },
        "&:focus-within": {
          backgroundColor: "$colors$primary600",
          borderColor: "$colors$primary600",
        },
      },
      color: "primary",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$colors$blue500",
        borderColor: "$colors$blue500",
        "& input": {
          color: "white",
        },
        "& input::placeholder": {
          color: "$colors$blue50",
        },
        "&:hover": {
          backgroundColor: "$colors$blue600",
          borderColor: "$colors$blue600",
        },
        "&:focus-within": {
          backgroundColor: "$colors$blue600",
          borderColor: "$colors$blue600",
        },
      },
      color: "blue",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$colors$orange500",
        borderColor: "$colors$orange500",
        "& input": {
          color: "white",
        },
        "& input::placeholder": {
          color: "$colors$orange50",
        },
        "&:hover": {
          backgroundColor: "$colors$orange600",
          borderColor: "$colors$orange600",
        },
        "&:focus-within": {
          backgroundColor: "$colors$orange600",
          borderColor: "$colors$orange600",
        },
      },
      color: "orange",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$colors$neutral100",
        borderColor: "$colors$neutral100",
        "& input::placeholder": {
          color: "$colors$neutral400",
        },
        "&:hover": {
          backgroundColor: "$colors$neutral200",
          borderColor: "$colors$neutral200",
        },
        "&:hover input::placeholder": {
          color: "$colors$neutral500",
        },
        "&:focus-within": {
          backgroundColor: "$colors$neutral300",
          borderColor: "$colors$neutral300",
        },
        "&:focus-within input::placeholder": {
          color: "$colors$neutral600",
        },
      },
      color: "neutral",
      variant: "fill",
    },
    {
      css: {
        backgroundColor: "$colors$primary100",
        borderColor: "$colors$primary100",
        "& input::placeholder": {
          color: "$colors$primary400",
        },
        "&:hover": {
          backgroundColor: "$colors$primary200",
          borderColor: "$colors$primary200",
        },
        "&:hover input::placeholder": {
          color: "$colors$primary500",
        },
        "&:focus-within": {
          backgroundColor: "$colors$primary300",
          borderColor: "$colors$primary300",
        },
        "&:focus-within input::placeholder": {
          color: "$colors$primary600",
        },
      },
      color: "primary",
      variant: "fill",
    },
    {
      css: {
        backgroundColor: "$colors$blue100",
        borderColor: "$colors$blue100",
        "& input::placeholder": {
          color: "$colors$blue400",
        },
        "&:hover": {
          backgroundColor: "$colors$blue200",
          borderColor: "$colors$blue200",
        },
        "&:hover input::placeholder": {
          color: "$colors$blue500",
        },
        "&:focus-within": {
          backgroundColor: "$colors$blue300",
          borderColor: "$colors$blue300",
        },
        "&:focus-within input::placeholder": {
          color: "$colors$blue600",
        },
      },
      color: "blue",
      variant: "fill",
    },
    {
      css: {
        backgroundColor: "$colors$orange100",
        borderColor: "$colors$orange100",
        "& input::placeholder": {
          color: "$colors$orange400",
        },
        "&:hover": {
          backgroundColor: "$colors$orange200",
          borderColor: "$colors$orange200",
        },
        "&:hover input::placeholder": {
          color: "$colors$orange500",
        },
        "&:focus-within": {
          backgroundColor: "$colors$orange300",
          borderColor: "$colors$orange300",
        },
        "&:focus-within input::placeholder": {
          color: "$colors$orange600",
        },
      },
      color: "orange",
      variant: "fill",
    },
    {
      css: {
        borderBottom: "2px solid $colors$neutral300",
        "&:focus-within": {
          borderBottomColor: "$colors$neutral400",
        },
      },
      color: "neutral",
      variant: "flush",
    },
    {
      css: {
        borderBottom: "2px solid $colors$primary300",
        "&:focus-within": {
          borderBottomColor: "$colors$primary400",
        },
      },
      color: "primary",
      variant: "flush",
    },
    {
      css: {
        borderBottom: "2px solid $colors$blue300",
        "&:focus-within": {
          borderBottomColor: "$colors$blue400",
        },
      },
      color: "blue",
      variant: "flush",
    },
    {
      css: {
        borderBottom: "2px solid $colors$orange300",
        "&:focus-within": {
          borderBottomColor: "$colors$orange400",
        },
      },
      color: "orange",
      variant: "flush",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "outline",
    color: "neutral",
  },
});

type InputWrapperProps = VariantProps<typeof InputWrapper>;
type NormalInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type InputProps = InputWrapperProps &
  Omit<NormalInputProps, keyof InputWrapperProps> & { css?: CSS };

export const Input = forwardRef<ElementRef<"input">, InputProps>(
  ({ round, size, color, variant, css, typeSize, ...props }, forwardedRef) => {
    return (
      <InputWrapper
        round={round}
        size={size}
        color={color}
        typeSize={typeSize ?? size}
        variant={variant}
        css={css}
      >
        <input ref={forwardedRef} {...props} />
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";

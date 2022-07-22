import { styled, VariantProps, CSS } from "./stitches.config";

import { forwardRef, ReactNode, ComponentProps, ElementRef } from "react";
import { Typography } from "./Typography";

const ButtonWrapper = styled("button", {
  display: "flex",
  alignItems: "center",
  border: "1px solid",
  borderRadius: "$radii$xs",
  textAlign: "center",
  cursor: "pointer",
  transition:
    "background-color 300ms ease-in-out, color 300ms ease-in-out, border-color 300ms ease-in-out",
  "& .btn-center": {
    width: "100%",
  },
  "& .btn-text": {
    lineHeight: "normal",
  },
  "&:focus": {
    outline: "none",
  },
  "&:active": {
    elevation: "none",
  },
  variants: {
    color: {
      neutral: {},
      primary: {},
      blue: {},
      orange: {},
    },
    variant: {
      contained: {
        elevation: "none",
        "&:active": {
          elevation: "none",
        },
      },
      outline: {
        elevation: "none",
        "&:active": {
          elevation: "none",
        },
      },
      subtle: {
        elevation: "none",
        "&:active": {
          elevation: "none",
        },
      },
      ghost: {},
    },
    size: {
      xs: {
        paddingInline: "$space$2",
        gap: "$space$2",
        "& .btn-center": {
          paddingBlock: "var(--space-1)",
        },
        "&.lo": {
          paddingRight: "calc(1 * $space$2)",
        },
        "&.ro": {
          paddingLeft: "calc(1 * $space$2)",
        },
        "& .btn-left,& .btn-right": {
          fontSize: 0,
        },
      },
      sm: {
        paddingInline: "$space$3",
        gap: "$space$3",
        "& .btn-center": {
          paddingBlock: "var(--space-2)",
        },
        "&.lo": {
          paddingRight: "calc(1 * $space$3)",
        },
        "&.ro": {
          paddingLeft: "calc(1 * $space$3)",
        },
        "& .btn-left,& .btn-right": {
          fontSize: 0,
        },
      },
      md: {
        paddingInline: "$space$5",
        gap: "$space$5",
        "& .btn-center": {
          paddingBlock: "var(--space-4)",
        },
        "&.lo": {
          paddingRight: "calc(1 * $space$5)",
        },
        "&.ro": {
          paddingLeft: "calc(1 * $space$5)",
        },
        "& .btn-left,& .btn-right": {
          fontSize: 0,
        },
      },
      lg: {
        paddingInline: "$space$6",
        gap: "$space$6",
        "& .btn-center": {
          paddingBlock: "var(--space-6)",
        },
        "&.lo": {
          paddingRight: "calc(1 * $space$6)",
        },
        "&.ro": {
          paddingLeft: "calc(1 * $space$6)",
        },
        "& .btn-left,& .btn-right": {
          fontSize: 0,
        },
      },
      xl: {
        paddingInline: "$space$8",
        gap: "$space$8",
        "& .btn-center": {
          paddingBlock: "var(--space-8)",
        },
        "&.lo": {
          paddingRight: "calc(1 * $space$8)",
        },
        "&.ro": {
          paddingLeft: "calc(1 * $space$8)",
        },
        "& .btn-left,& .btn-right": {
          fontSize: 0,
        },
      },
    },
    typeSize: {
      xs: {
        "& .btn-left,& .btn-right": {
          marginTop: -1,
        },
      },
      sm: {
        "& .btn-left,& .btn-right": {
          marginTop: -1,
        },
      },
      md: {
        "& .btn-left,& .btn-right": {
          marginTop: 0,
        },
      },
      lg: {
        "& .btn-left,& .btn-right": {
          marginTop: 0,
        },
      },
      xl: {
        "& .btn-left,& .btn-right": {
          marginTop: 0,
        },
      },
    },
    round: {
      true: {
        borderRadius: "$radii$round",
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
          backgroundColor: "$colors$neutral600",
          borderColor: "$colors$neutral600",
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
          backgroundColor: "$colors$primary600",
          borderColor: "$colors$primary600",
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
          backgroundColor: "$colors$blue600",
          borderColor: "$colors$blue600",
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
          backgroundColor: "$colors$orange600",
          borderColor: "$colors$orange600",
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
          backgroundColor: "$colors$neutral50",
          borderColor: "$colors$neutral700",
          color: "$colors$neutral700",
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
          backgroundColor: "$colors$primary50",
          borderColor: "$colors$primary700",
          color: "$colors$primary700",
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
          backgroundColor: "$colors$blue50",
          borderColor: "$colors$blue700",
          color: "$colors$blue700",
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
          backgroundColor: "$colors$orange50",
          borderColor: "$colors$orange700",
          color: "$colors$orange700",
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
        borderColor: "$colors$neutral200",
        color: "$colors$neutral800",
        "&:hover": {
          backgroundColor: "$colors$neutral300",
          borderColor: "$colors$neutral300",
          color: "$colors$neutral800",
        },
        "&:focus-visible": {
          backgroundColor: "$colors$neutral300",
          borderColor: "$colors$neutral300",
          color: "$colors$neutral800",
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
        borderColor: "$colors$primary200",
        color: "$colors$primary700",
        "&:hover": {
          backgroundColor: "$colors$primary300",
          borderColor: "$colors$primary300",
          color: "$colors$primary700",
        },
        "&:focus-visible": {
          backgroundColor: "$colors$primary300",
          borderColor: "$colors$primary300",
          color: "$colors$primary700",
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
        borderColor: "$colors$blue200",
        color: "$colors$blue700",
        "&:hover": {
          backgroundColor: "$colors$blue300",
          borderColor: "$colors$blue300",
          color: "$colors$blue700",
        },
        "&:focus-visible": {
          backgroundColor: "$colors$blue300",
          borderColor: "$colors$blue300",
          color: "$colors$blue700",
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
        borderColor: "$colors$orange200",
        color: "$colors$orange700",
        "&:hover": {
          backgroundColor: "$colors$orange300",
          borderColor: "$colors$orange300",
          color: "$colors$orange700",
        },
        "&:focus-visible": {
          backgroundColor: "$colors$orange300",
          borderColor: "$colors$orange300",
          color: "$colors$orange700",
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
          backgroundColor: "$colors$neutral200",
          color: "$foreground",
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
          backgroundColor: "$colors$primary200",
          color: "$colors$primary600",
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
          backgroundColor: "$colors$blue200",
          color: "$colors$blue600",
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
          backgroundColor: "$colors$orange200",
          color: "$colors$orange600",
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
    size: "sm",
    variant: "contained",
    color: "neutral",
  },
});

const DEFAULT_TAG = "button";

type ButtonWrapperProps = VariantProps<typeof ButtonWrapper>;
export type ButtonProps = ComponentProps<typeof DEFAULT_TAG> &
  ButtonWrapperProps & {
    css?: CSS;
    as?: any;
    left?: ReactNode;
    right?: ReactNode;
  };
export const Button = forwardRef<ElementRef<typeof DEFAULT_TAG>, ButtonProps>(
  ({ children, left, right, className = "", typeSize, ...props }, ref) => {
    let otherClasses = "";
    if (left && !right) {
      otherClasses += " lo";
    } else if (right && !left) {
      otherClasses += " ro";
    }
    if (!typeSize) typeSize = props.size ?? "md";
    return (
      <ButtonWrapper ref={ref} className={className + otherClasses} {...props}>
        {left ? <div className="btn-left">{left}</div> : null}
        <div className="btn-center">
          <Typography css={{ lineHeight: "normal" }} size={typeSize}>
            {children}
          </Typography>
        </div>
        {right ? <div className="btn-right">{right}</div> : null}
      </ButtonWrapper>
    );
  }
);

Button.displayName = "Button";

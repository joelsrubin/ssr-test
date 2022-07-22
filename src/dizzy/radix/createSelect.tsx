import * as Select from "@radix-ui/react-select";
import { Button, ButtonProps } from "../Button";
import { AiFillCaretDown } from "react-icons/ai";
import { styled, CSS } from "../stitches.config";
import { ReactNode, forwardRef } from "react";
import { Typography } from "../Typography";

const SelectContent = styled(Select.Content, {
  backgroundColor: "$background",
  borderWidth: 0,
  borderRadius: "$xs",
  variants: {
    variant: { outline: { backgroundColor: "$background" } },
    color: { neutral: {}, primary: {}, blue: {}, orange: {} },
  },
  compoundVariants: [
    {
      css: {
        borderColor: "$colors$neutral500",
        backgroundColor: "$background",
        borderWidth: "1px 0",
        "&:hover": { borderColor: "$neutral700" },
      },
      color: "neutral",
      variant: "outline",
    },
    {
      css: {
        borderColor: "$colors$primary500",
        backgroundColor: "$background",
        borderWidth: "1px 0",
        "&:hover": { borderColor: "$primary700" },
      },
      color: "primary",
      variant: "outline",
    },
    {
      css: {
        borderColor: "$colors$blue500",
        backgroundColor: "$background",
        borderWidth: "1px 0",
        "&:hover": { borderColor: "$blue700" },
      },
      color: "blue",
      variant: "outline",
    },
    {
      css: {
        borderColor: "$colors$orange500",
        backgroundColor: "$background",
        borderWidth: "1px 0",
        "&:hover": { borderColor: "$orange700" },
      },
      color: "orange",
      variant: "outline",
    },
    {
      css: {
        backgroundColor: "$colors$neutral500",
        borderColor: "$colors$neutral500",
        color: "white",
      },
      color: "neutral",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$colors$primary500",
        borderColor: "$colors$primary500",
        color: "white",
      },
      color: "primary",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$colors$blue500",
        borderColor: "$colors$blue500",
        color: "white",
      },
      color: "blue",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$colors$orange500",
        borderColor: "$colors$orange500",
        color: "white",
      },
      color: "orange",
      variant: "contained",
    },
    {
      css: {
        backgroundColor: "$colors$neutral200",
        borderColor: "$colors$neutral300",
        color: "$colors$neutral800",
      },
      color: "neutral",
      variant: "subtle",
    },
    {
      css: {
        backgroundColor: "$colors$primary200",
        borderColor: "$colors$primary300",
        color: "$colors$primary700",
      },
      color: "primary",
      variant: "subtle",
    },
    {
      css: {
        backgroundColor: "$colors$blue200",
        borderColor: "$colors$blue300",
        color: "$colors$blue700",
      },
      color: "blue",
      variant: "subtle",
    },
    {
      css: {
        backgroundColor: "$colors$orange200",
        borderColor: "$colors$orange300",
        color: "$colors$orange700",
      },
      color: "orange",
      variant: "subtle",
    },
    {
      css: {
        backgroundColor: "#fafafa",
        borderColor: "$neutral100",
        borderWidth: "1px",
      },
      color: "neutral",
      variant: "ghost",
    },
    {
      css: {
        backgroundColor: "#fafafa",
        borderColor: "$neutral100",
        borderWidth: "1px",
      },
      color: "primary",
      variant: "ghost",
    },
    {
      css: {
        backgroundColor: "#fafafa",
        borderColor: "$neutral100",
        borderWidth: "1px",
      },
      color: "blue",
      variant: "ghost",
    },
    {
      css: {
        backgroundColor: "#fafafa",
        borderColor: "$neutral100",
        borderWidth: "1px",
      },
      color: "orange",
      variant: "ghost",
    },
  ],
  defaultVariants: { color: "neutral", variant: "outline" },
});

const SelectItem = styled(Select.Item, {
  display: "block",
  cursor: "pointer",
  border: "1px solid",
  variants: {
    color: { neutral: {}, primary: {}, blue: {}, orange: {} },
    variant: { outline: {} },
    size: {
      xs: {
        paddingInline: "$space$2",
        paddingLeft: "calc(1 * $space$2)",
        paddingBlock: "var(--space-1)",
      },
      sm: {
        paddingInline: "$space$3",
        paddingLeft: "calc(1 * $space$3)",
        paddingBlock: "var(--space-2)",
      },
      md: {
        paddingInline: "$space$5",
        paddingLeft: "calc(1 * $space$5)",
        paddingBlock: "var(--space-4)",
      },
      lg: {
        paddingInline: "$space$6",
        paddingLeft: "calc(1 * $space$6)",
        paddingBlock: "var(--space-6)",
      },
      xl: {
        paddingInline: "$space$8",
        paddingLeft: "calc(1 * $space$8)",
        paddingBlock: "var(--space-8)",
      },
    },
  },
  compoundVariants: [
    {
      css: {
        color: "$colors$neutral600",
        borderColor: "$colors$neutral500",
        borderWidth: "0 1px",
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$neutral100",
          color: "$neutral700",
          outline: "none",
        },
      },
      color: "neutral",
      variant: "outline",
    },
    {
      css: {
        color: "$colors$primary600",
        borderColor: "$colors$primary500",
        borderWidth: "0 1px",
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$primary100",
          color: "$primary700",
          outline: "none",
        },
      },
      color: "primary",
      variant: "outline",
    },
    {
      css: {
        color: "$colors$blue600",
        borderColor: "$colors$blue500",
        borderWidth: "0 1px",
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$blue100",
          color: "$blue700",
          outline: "none",
        },
      },
      color: "blue",
      variant: "outline",
    },
    {
      css: {
        color: "$colors$orange600",
        borderColor: "$colors$orange500",
        borderWidth: "0 1px",
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$orange100",
          color: "$orange700",
          outline: "none",
        },
      },
      color: "orange",
      variant: "outline",
    },
    {
      css: {
        color: "white",
        borderColor: "$colors$neutral500",
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$colors$neutral600",
          borderColor: "$colors$neutral600",
          outline: "none",
        },
      },
      color: "neutral",
      variant: "contained",
    },
    {
      css: {
        color: "white",
        borderColor: "$colors$primary500",
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$colors$primary600",
          borderColor: "$colors$primary600",
          outline: "none",
        },
      },
      color: "primary",
      variant: "contained",
    },
    {
      css: {
        color: "white",
        borderColor: "$colors$blue500",
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$colors$blue600",
          borderColor: "$colors$blue600",
          outline: "none",
        },
      },
      color: "blue",
      variant: "contained",
    },
    {
      css: {
        color: "white",
        borderColor: "$colors$orange500",
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$colors$orange600",
          borderColor: "$colors$orange600",
          outline: "none",
        },
      },
      color: "orange",
      variant: "contained",
    },
    {
      css: {
        color: "$colors$neutral800",
        borderColor: "$colors$neutral300",
        borderBottomWidth: 0,
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$colors$neutral300",
          borderColor: "$colors$neutral300",
          outline: "none",
        },
        "&:last-child": { borderBottomWidth: "1px" },
      },
      color: "neutral",
      variant: "subtle",
    },
    {
      css: {
        color: "$colors$primary700",
        borderColor: "$colors$primary300",
        borderBottomWidth: 0,
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$colors$primary300",
          borderColor: "$colors$primary300",
          outline: "none",
        },
        "&:last-child": { borderBottomWidth: "1px" },
      },
      color: "primary",
      variant: "subtle",
    },
    {
      css: {
        color: "$colors$blue700",
        borderColor: "$colors$blue300",
        borderBottomWidth: 0,
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$colors$blue300",
          borderColor: "$colors$blue300",
          outline: "none",
        },
        "&:last-child": { borderBottomWidth: "1px" },
      },
      color: "blue",
      variant: "subtle",
    },
    {
      css: {
        color: "$colors$orange700",
        borderColor: "$colors$orange300",
        borderBottomWidth: 0,
        '&[aria-selected="true"],&:focus': {
          backgroundColor: "$colors$orange300",
          borderColor: "$colors$orange300",
          outline: "none",
        },
        "&:last-child": { borderBottomWidth: "1px" },
      },
      color: "orange",
      variant: "subtle",
    },
    {
      css: {
        color: "$foreground",
        borderColor: "transparent",
        '&[aria-selected="true"],&:focus': {
          outline: "none",
          color: "$foreground",
          backgroundColor: "$colors$neutral200",
        },
      },
      color: "neutral",
      variant: "ghost",
    },
    {
      css: {
        color: "$colors$primary500",
        borderColor: "transparent",
        '&[aria-selected="true"],&:focus': {
          outline: "none",
          color: "$colors$primary600",
          backgroundColor: "$colors$primary200",
        },
      },
      color: "primary",
      variant: "ghost",
    },
    {
      css: {
        color: "$colors$blue500",
        borderColor: "transparent",
        '&[aria-selected="true"],&:focus': {
          outline: "none",
          color: "$colors$blue600",
          backgroundColor: "$colors$blue200",
        },
      },
      color: "blue",
      variant: "ghost",
    },
    {
      css: {
        color: "$colors$orange500",
        borderColor: "transparent",
        '&[aria-selected="true"],&:focus': {
          outline: "none",
          color: "$colors$orange600",
          backgroundColor: "$colors$orange200",
        },
      },
      color: "orange",
      variant: "ghost",
    },
  ],
  defaultVariants: { color: "neutral", size: "md" },
});

const SelectViewport = styled(Select.Viewport, { borderRadius: "$xs" });

export function createSelect(props: ButtonProps, css?: CSS) {
  const typographySize =
    props.size === "lg"
      ? "md"
      : props.size === "md"
      ? "sm"
      : props.size === "sm"
      ? "xs"
      : "sm";

  let { right, ...propsRest } = props;

  const Item = forwardRef<any, any>(({ children, ...rest }, ref) => (
    <SelectItem {...(propsRest as any)} {...rest} ref={ref}>
      {children}
    </SelectItem>
  ));
  Item.displayName = "Item";

  const Content = forwardRef<any, any>(({ children, ...rest }, ref) => (
    <SelectContent {...(propsRest as any)} {...rest} ref={ref}>
      {children}
    </SelectContent>
  ));
  Content.displayName = "Content";

  const ItemText = forwardRef<any, any>(({ children, ...rest }, ref) => (
    <Select.ItemText {...(propsRest as any)} {...rest} ref={ref} asChild>
      <Typography
        css={{ lineHeight: "normal" }}
        size={props.typeSize ?? props.size}
      >
        {children}
      </Typography>
    </Select.ItemText>
  ));
  ItemText.displayName = "ItemText";

  const Trigger = () => {
    return (
      <Select.Trigger aria-label="Options" asChild>
        <Button
          {...propsRest}
          css={css ?? { textAlign: "left" }}
          ref={undefined}
          right={right ? <Select.Icon>{right}</Select.Icon> : undefined}
        >
          <Select.Value />
        </Button>
      </Select.Trigger>
    );
  };

  return {
    ...Select,
    Item,
    Content,
    Trigger,
    ItemText,
    Viewport: SelectViewport,
  };
}

import { Button, ButtonProps } from "./Button";
import type { Story } from "@ladle/react";
import { Stack } from "./Stack";
import { styled, VariantProps } from "./stitches.config";
import {
  HiDocumentRemove,
  HiEye,
  HiFingerPrint,
  HiMenuAlt1,
} from "react-icons/hi";
export const All = () => (
  <Stack gap="2" x="start" x-items="start">
    <Button color="neutral" size="xs" typeSize="xs" variant="contained">
      I am the button text
    </Button>
    <Button
      color="neutral"
      size="sm"
      typeSize="sm"
      variant="contained"
      left={<HiMenuAlt1 size={19} />}
    >
      I am the button text
    </Button>
    <Button
      color="neutral"
      size="md"
      typeSize="sm"
      variant="contained"
      left={<HiDocumentRemove size={30} />}
    >
      I am the button text
    </Button>
    <Button color="blue" size="xs" typeSize="xs" variant="contained">
      I am the button text
    </Button>
    <Button color="blue" size="sm" typeSize="sm" variant="contained">
      I am the button text
    </Button>
    <Button color="blue" size="md" typeSize="sm" variant="contained">
      I am the button text
    </Button>
    <Button color="orange" size="xs" typeSize="xs" variant="contained">
      I am the button text
    </Button>
    <Button
      color="orange"
      size="sm"
      typeSize="sm"
      variant="contained"
      left={<HiFingerPrint size={19} />}
    >
      I am the button text
    </Button>
    <Button color="orange" size="md" typeSize="sm" variant="contained">
      I am the button text
    </Button>
    <Button color="neutral" size="xs" typeSize="xs" variant="outline">
      I am the button text
    </Button>
    <Button
      color="neutral"
      size="sm"
      typeSize="sm"
      variant="outline"
      left={<HiFingerPrint size={19} />}
    >
      I am the button text
    </Button>
    <Button color="neutral" size="md" typeSize="sm" variant="outline">
      I am the button text
    </Button>
    <Button color="blue" size="xs" typeSize="xs" variant="outline">
      I am the button text
    </Button>
    <Button color="blue" size="sm" typeSize="sm" variant="outline">
      I am the button text
    </Button>
    <Button color="blue" size="md" typeSize="sm" variant="outline">
      I am the button text
    </Button>
    <Button color="orange" size="xs" typeSize="xs" variant="outline">
      I am the button text
    </Button>
    <Button
      color="orange"
      size="sm"
      typeSize="sm"
      variant="outline"
      right={<HiFingerPrint size={19} />}
    >
      I am the button text
    </Button>
    <Button
      color="orange"
      size="md"
      typeSize="sm"
      variant="outline"
      left={<HiDocumentRemove size={30} />}
    >
      I am the button text
    </Button>
    <Button
      color="neutral"
      size="xs"
      typeSize="xs"
      variant="subtle"
      right={<HiFingerPrint size={16} />}
    >
      I am the button text
    </Button>
    <Button color="neutral" size="sm" typeSize="sm" variant="subtle">
      I am the button text
    </Button>
    <Button color="neutral" size="md" typeSize="sm" variant="subtle">
      I am the button text
    </Button>
    <Button
      color="blue"
      size="xs"
      typeSize="xs"
      variant="subtle"
      right={<HiMenuAlt1 size={16} />}
    >
      I am the button text
    </Button>
    <Button
      color="blue"
      size="sm"
      typeSize="sm"
      variant="subtle"
      left={<HiMenuAlt1 size={19} />}
    >
      I am the button text
    </Button>
    <Button color="blue" size="md" typeSize="sm" variant="subtle">
      I am the button text
    </Button>
    <Button color="orange" size="xs" typeSize="xs" variant="subtle">
      I am the button text
    </Button>
    <Button color="orange" size="sm" typeSize="sm" variant="subtle">
      I am the button text
    </Button>
    <Button
      color="orange"
      size="md"
      typeSize="sm"
      variant="subtle"
      right={<HiDocumentRemove size={30} />}
    >
      I am the button text
    </Button>
    <Button color="neutral" size="xs" typeSize="xs" variant="ghost">
      I am the button text
    </Button>
    <Button
      color="neutral"
      size="sm"
      typeSize="sm"
      variant="ghost"
      left={<HiDocumentRemove size={19} />}
    >
      I am the button text
    </Button>
    <Button
      color="neutral"
      size="md"
      typeSize="sm"
      variant="ghost"
      left={<HiDocumentRemove size={30} />}
    >
      I am the button text
    </Button>
    <Button color="blue" size="xs" typeSize="xs" variant="ghost">
      I am the button text
    </Button>
    <Button color="blue" size="sm" typeSize="sm" variant="ghost">
      I am the button text
    </Button>
    <Button color="blue" size="md" typeSize="sm" variant="ghost">
      I am the button text
    </Button>
    <Button color="orange" size="xs" typeSize="xs" variant="ghost">
      I am the button text
    </Button>
    <Button color="orange" size="sm" typeSize="sm" variant="ghost">
      I am the button text
    </Button>
    <Button color="orange" size="md" typeSize="sm" variant="ghost">
      I am the button text
    </Button>
  </Stack>
);

const Center = styled("div", {
  minHeight: "70vh",
  display: "grid",
  placeContent: "center",
});

export const Builder: Story<{ label: string } & ButtonProps> = ({
  label,
  round,
  size,
  typeSize,
  variant,
  color,
}) => (
  <Center>
    <Button
      round={round === "true" ? true : false}
      size={size}
      typeSize={typeSize}
      variant={variant}
      color={color}
    >
      {label}
    </Button>
  </Center>
);

Builder.args = {
  size: "md",
  label: "Hello World",
};

Builder.argTypes = {
  size: {
    options: ["xs", "sm", "md", "lg", "xl"],
    control: { type: "select" },
    defaultValue: "md",
  },
  typeSize: {
    options: ["", "xs", "sm", "md", "lg", "xl"],
    control: { type: "select" },
    defaultValue: "",
  },
  variant: {
    options: ["contained", "outline", "subtle", "ghost"],
    control: { type: "select" },
    defaultValue: "contained",
  },
  color: {
    options: ["neutral", "primary", "blue", "orange"],
    control: { type: "select" },
    defaultValue: "neutral",
  },
  round: {
    options: ["true", "false"],
    control: { type: "select" },
    defaultValue: "false",
  },
};

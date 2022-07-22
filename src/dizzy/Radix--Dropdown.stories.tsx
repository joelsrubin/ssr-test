import { Button } from "./Button";
import { AiFillCaretDown } from "react-icons/ai";
import { Typography } from "./Typography";
import { styled } from "./stitches.config";
import { createDropdown } from "./radix/createDropdown";
import { useState } from "react";
import { Stack } from "./Stack";

const episodes = ["Option A", "Option B", "Option C", "Option D"];

const Dropdown = createDropdown({
  variant: "contained",
  size: "sm",
  typeSize: "sm",
});

export const Uncontrolled = () => (
  <Dropdown.Root>
    <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
    <Dropdown.Content>
      {episodes.map((episode) => (
        <Dropdown.Item key={episode} value={episode}>
          {episode}
        </Dropdown.Item>
      ))}
    </Dropdown.Content>
  </Dropdown.Root>
);

const story = {
  title: "Dropdown",
  decorators: [
    (Story: React.FC) => (
      <div style={{ height: "100%", display: "grid", placeContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};
export default story;

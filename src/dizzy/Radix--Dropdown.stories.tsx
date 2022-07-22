import { Button } from "./Button";
import { AiFillCaretDown } from "react-icons/ai";
import { Typography } from "./Typography";
import { styled } from "./stitches.config";
import { createDropdown } from "./radix/createDropdown";
import { useState } from "react";
import { Stack } from "./Stack";

const episodes = [
  "The Man Trap",
  "Charlie X",
  "Where No Man Has Gone Before",
  "The Naked Time",
  "The Enemy Within",
  "Mudd's Women",
  "What Are Little Girls Made Of?",
  "Miri",
  "Dagger of the Mind",
  "The Corbomite Maneuver",
  "The Menagerie",
  "The Conscience of the King",
  "Balance of Terror",
  "Shore Leave",
  "The Galileo Seven",
  "The Squire of Gothos",
  "Arena",
  "Tomorrow Is Yesterday",
  "Court Martial",
  "The Return of the Archons",
  "Space Seed",
  "A Taste of Armageddon",
  "This Side of Paradise",
  "The Devil in the Dark",
  "Errand of Mercy",
  "The Alternative Factor",
  "The City on the Edge of Forever",
  "Operation -- Annihilate!",
];

const Dropdown = createDropdown(
  { variant: "contained", size: "md", typeSize: "sm" },
  { textAlign: "left", width: 300 }
);

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

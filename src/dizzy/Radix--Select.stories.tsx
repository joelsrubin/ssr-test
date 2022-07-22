import { Button } from "./Button";
import { AiFillCaretDown } from "react-icons/ai";
import { Typography } from "./Typography";
import { styled } from "./stitches.config";
import { createSelect } from "./radix/createSelect";
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

const Select = createSelect(
  {
    variant: "contained",
    right: <AiFillCaretDown size={14} />,
    color: "primary",
    size: "sm",
  },
  { textAlign: "left", width: 300 }
);

export const Uncontrolled = () => (
  <Select.Root defaultValue="The Man Trap">
    <Select.Trigger />
    <Select.Content>
      <Select.Viewport>
        {episodes.map((episode) => (
          <Select.Item key={episode} value={episode}>
            <Select.ItemText>{episode}</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        ))}
      </Select.Viewport>
    </Select.Content>
  </Select.Root>
);

const Contained = createSelect(
  {
    variant: "contained",
    right: <AiFillCaretDown size={14} />,
    size: "md",
    typeSize: "xs",
  },
  { textAlign: "left", width: 360 }
);
const Subtle = createSelect(
  {
    variant: "subtle",
    right: <AiFillCaretDown size={14} />,
    size: "md",
    typeSize: "xs",
  },
  { textAlign: "left", width: 360 }
);
const Outline = createSelect(
  {
    variant: "outline",
    right: <AiFillCaretDown size={14} />,
    size: "md",
    typeSize: "xs",
  },
  { textAlign: "left", width: 360 }
);
const Ghost = createSelect(
  {
    variant: "ghost",
    right: <AiFillCaretDown size={14} />,
    size: "md",
    typeSize: "xs",
  },
  { textAlign: "left", width: 360 }
);

export const Controlled = () => {
  const [value, setValue] = useState(episodes[0]);
  return (
    <Stack gap="2">
      <Contained.Root value={value} onValueChange={(x) => setValue(x)}>
        <Contained.Trigger />
        <Contained.Content>
          <Contained.Viewport>
            {episodes.map((episode) => (
              <Contained.Item key={episode} value={episode}>
                <Contained.ItemText>{episode}</Contained.ItemText>
                <Contained.ItemIndicator />
              </Contained.Item>
            ))}
          </Contained.Viewport>
        </Contained.Content>
      </Contained.Root>
      <Subtle.Root value={value} onValueChange={(x) => setValue(x)}>
        <Subtle.Trigger />
        <Subtle.Content>
          <Subtle.Viewport>
            {episodes.map((episode) => (
              <Subtle.Item key={episode} value={episode}>
                <Subtle.ItemText>{episode}</Subtle.ItemText>
                <Subtle.ItemIndicator />
              </Subtle.Item>
            ))}
          </Subtle.Viewport>
        </Subtle.Content>
      </Subtle.Root>
      <Outline.Root value={value} onValueChange={(x) => setValue(x)}>
        <Outline.Trigger />
        <Outline.Content>
          <Outline.Viewport>
            {episodes.map((episode) => (
              <Outline.Item key={episode} value={episode}>
                <Outline.ItemText>{episode}</Outline.ItemText>
                <Outline.ItemIndicator />
              </Outline.Item>
            ))}
          </Outline.Viewport>
        </Outline.Content>
      </Outline.Root>
      <Ghost.Root value={value} onValueChange={(x) => setValue(x)}>
        <Ghost.Trigger />
        <Ghost.Content>
          <Ghost.Viewport>
            {episodes.map((episode) => (
              <Ghost.Item key={episode} value={episode}>
                <Ghost.ItemText>{episode}</Ghost.ItemText>
                <Ghost.ItemIndicator />
              </Ghost.Item>
            ))}
          </Ghost.Viewport>
        </Ghost.Content>
      </Ghost.Root>
    </Stack>
  );
};

const story = {
  title: "Select",
  decorators: [
    (Story: React.FC) => (
      <div style={{ height: "100%", display: "grid", placeContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};
export default story;

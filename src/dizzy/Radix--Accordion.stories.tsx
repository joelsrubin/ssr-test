import * as Accordion from "@radix-ui/react-accordion";
import { Button } from "./Button";
import { GoChevronDown } from "react-icons/go";
import { styled, keyframes } from "./stitches.config";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledContent = styled(Accordion.Content, {
  overflow: "hidden",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const Inner = styled("div", {
  paddingBlock: "$5",
});

export const Example = () => {
  return (
    <div>
      <Accordion.Root type="single">
        <Accordion.Item value="a">
          <Accordion.Header>
            <Accordion.Trigger asChild>
              <Button
                variant="subtle"
                typeSize="sm"
                size="md"
                color="primary"
                right={<GoChevronDown size={20} />}
              >
                Question One
              </Button>
            </Accordion.Trigger>
          </Accordion.Header>
          <StyledContent>
            <Inner>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Inner>
          </StyledContent>
        </Accordion.Item>
        <Accordion.Item value="b">
          <Accordion.Header>
            <Accordion.Trigger>
              <Button
                variant="subtle"
                typeSize="sm"
                size="md"
                color="primary"
                right={<GoChevronDown size={20} />}
              >
                Question Two
              </Button>
            </Accordion.Trigger>
          </Accordion.Header>
          <StyledContent>
            <Inner>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Inner>
          </StyledContent>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

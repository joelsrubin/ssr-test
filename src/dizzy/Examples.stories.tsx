import { Stack } from "./Stack";
import { Input } from "./Input";
import { Button, ButtonProps } from "./Button";
import { Typography } from "./Typography";
import { styled } from "./stitches.config";
import { createSelect } from "./radix/createSelect";

const CardBase = styled("div", {
  border: "2px solid $neutral300",
  padding: "$4",
  borderRadius: "$sm",
  elevation: "sm",
});

export const BuildingACard = () => (
  <Stack gap={4}>
    <Typography size="lg">Building A Card</Typography>
    <Typography as="p">
      We can reference variables using &quot;$&quot;.
    </Typography>
    <code>
      <pre>{`const CardBase = styled("div", {
  border: "2px solid $neutral300",
  padding: "$4",
  borderRadius: "$sm",
  elevation: "sm",
});`}</pre>
    </code>
    <CardBase>Hello World</CardBase>
  </Stack>
);

const colors = [
  "neutral",
  "primary",
  "blue",
  "orange",
] as ButtonProps["color"][];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
const color1 = getRandomColor();
const color2 = getRandomColor();
const color3 = getRandomColor();

const getRandomSize = () =>
  (["xs", "sm", "md"] as ButtonProps["size"][])[Math.floor(Math.random() * 3)];
const size1 = getRandomSize();
const size2 = getRandomSize();
const size3 = getRandomSize();

const Select = createSelect(
  { variant: "outline", color: color1, size: size1 },
  {
    textAlign: "left",
  }
);

const SecondSelect = createSelect(
  { variant: "contained", color: color2, size: size2 },
  {
    textAlign: "left",
  }
);

const ThirdSelect = createSelect(
  { variant: "subtle", color: color3, size: size3 },
  {
    textAlign: "left",
  }
);

const fruits = ["Apple", "Banana", "Orange"];

const Center = styled("div", {
  minHeight: "70vh",
  display: "grid",
  placeContent: "center",
});

export const SimpleForms = () => {
  return (
    <Center>
      <Stack x="center" x-items="center" gap="4">
        <Typography size="lg">Simple Forms</Typography>
        <Typography size="sm">Refresh to generate variations</Typography>
        <Stack gap="1" dir="h" x="start" y-items="center">
          <Input size={size1} color={color1} placeholder="First name" />
          <Input size={size1} color={color1} placeholder="Last name" />
          <Select.Root defaultValue="Banana">
            <Select.Trigger />
            <Select.Content>
              <Select.Viewport>
                {fruits.map((fruit) => (
                  <Select.Item key={fruit} value={fruit}>
                    <Select.ItemText>{fruit}</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Root>
          <Button size={size1} variant="outline" color={color1}>
            Submit
          </Button>
        </Stack>
        <Stack gap="1" dir="h" x="start" y-items="center">
          <Input
            variant="contained"
            color={color2}
            size={size2}
            placeholder="First name"
          />
          <Input
            variant="contained"
            color={color2}
            size={size2}
            placeholder="Last name"
          />
          <SecondSelect.Root defaultValue="Banana">
            <SecondSelect.Trigger />
            <SecondSelect.Content>
              <SecondSelect.Viewport>
                {fruits.map((fruit) => (
                  <SecondSelect.Item key={fruit} value={fruit}>
                    <SecondSelect.ItemText>{fruit}</SecondSelect.ItemText>
                    <SecondSelect.ItemIndicator />
                  </SecondSelect.Item>
                ))}
              </SecondSelect.Viewport>
            </SecondSelect.Content>
          </SecondSelect.Root>
          <Button variant="contained" size={size2} color={color2}>
            Submit
          </Button>
        </Stack>
        <Stack gap="1" dir="v" x="start">
          <Input
            variant="fill"
            color={color3}
            size={size3}
            placeholder="First name"
          />
          <Input
            variant="fill"
            color={color3}
            size={size3}
            placeholder="Last name"
          />
          <ThirdSelect.Root defaultValue="Banana">
            <ThirdSelect.Trigger />
            <ThirdSelect.Content>
              <ThirdSelect.Viewport>
                {fruits.map((fruit) => (
                  <ThirdSelect.Item key={fruit} value={fruit}>
                    <ThirdSelect.ItemText>{fruit}</ThirdSelect.ItemText>
                    <ThirdSelect.ItemIndicator />
                  </ThirdSelect.Item>
                ))}
              </ThirdSelect.Viewport>
            </ThirdSelect.Content>
          </ThirdSelect.Root>
          <Button variant="subtle" size={size3} color={color3}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};

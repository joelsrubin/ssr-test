import { styled } from "./stitches.config";
import { Stack } from "./Stack";
import { Typography } from "./Typography";
import { Fragment, useState } from "react";
import { createSelect } from "./radix/createSelect";

const Box = styled("div", {
  width: "100%",
  height: "$space$10",
});

const Grid = styled("div", {
  display: "grid",
  rowGap: "$2",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
});

export const Colors = () => {
  return (
    <Stack gap="5">
      <Stack gap="2">
        <Typography size="lg" bold>
          neutral
        </Typography>
        <Grid css={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral0" }} />
            <Typography size="xs">$neutral0</Typography>
            <Typography color="neutral400" size="xs">
              #ffffff
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral50" }} />
            <Typography size="xs">$neutral50</Typography>
            <Typography color="neutral400" size="xs">
              #f8f8f8
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral100" }} />
            <Typography size="xs">$neutral100</Typography>
            <Typography color="neutral400" size="xs">
              #f0f0f0
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral200" }} />
            <Typography size="xs">$neutral200</Typography>
            <Typography color="neutral400" size="xs">
              #e1e1e1
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral300" }} />
            <Typography size="xs">$neutral300</Typography>
            <Typography color="neutral400" size="xs">
              #cdcdcd
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral400" }} />
            <Typography size="xs">$neutral400</Typography>
            <Typography color="neutral400" size="xs">
              #aeaeae
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral500" }} />
            <Typography size="xs">$neutral500</Typography>
            <Typography color="neutral400" size="xs">
              #919191
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral600" }} />
            <Typography size="xs">$neutral600</Typography>
            <Typography color="neutral400" size="xs">
              #767676
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral700" }} />
            <Typography size="xs">$neutral700</Typography>
            <Typography color="neutral400" size="xs">
              #5e5e5e
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral800" }} />
            <Typography size="xs">$neutral800</Typography>
            <Typography color="neutral400" size="xs">
              #4b4b4b
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral900" }} />
            <Typography size="xs">$neutral900</Typography>
            <Typography color="neutral400" size="xs">
              #3d3d3d
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$neutral1000" }} />
            <Typography size="xs">$neutral1000</Typography>
            <Typography color="neutral400" size="xs">
              #000000
            </Typography>
          </Stack>
        </Grid>
      </Stack>
      <Stack gap="2">
        <Stack dir="h" y-items="baseline" gap="2" x="start">
          <Typography size="lg" bold>
            blue
          </Typography>
          <Typography size="sm" color="neutral400">
            #bbecb1
          </Typography>
        </Stack>
        <Grid>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$blue50" }} />
            <Typography size="xs">$blue50</Typography>
            <Typography color="neutral400" size="xs">
              #f1fbef
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$blue100" }} />
            <Typography size="xs">$blue100</Typography>
            <Typography color="neutral400" size="xs">
              #e0f6dc
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$blue200" }} />
            <Typography size="xs">$blue200</Typography>
            <Typography color="neutral400" size="xs">
              #bbecb1
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$blue300" }} />
            <Typography size="xs">$blue300</Typography>
            <Typography color="neutral400" size="xs">
              #acd9a3
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$blue400" }} />
            <Typography size="xs">$blue400</Typography>
            <Typography color="neutral400" size="xs">
              #92b98b
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$blue500" }} />
            <Typography size="xs">$blue500</Typography>
            <Typography color="neutral400" size="xs">
              #7a9a73
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$blue600" }} />
            <Typography size="xs">$blue600</Typography>
            <Typography color="neutral400" size="xs">
              #637d5e
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$blue700" }} />
            <Typography size="xs">$blue700</Typography>
            <Typography color="neutral400" size="xs">
              #4f644b
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$blue800" }} />
            <Typography size="xs">$blue800</Typography>
            <Typography color="neutral400" size="xs">
              #3f4f3b
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$blue900" }} />
            <Typography size="xs">$blue900</Typography>
            <Typography color="neutral400" size="xs">
              #344131
            </Typography>
          </Stack>
        </Grid>
      </Stack>
      <Stack gap="2">
        <Stack dir="h" y-items="baseline" gap="2" x="start">
          <Typography size="lg" bold>
            orange
          </Typography>
          <Typography size="sm" color="neutral400">
            #a7b5fb
          </Typography>
        </Stack>
        <Grid>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$orange50" }} />
            <Typography size="xs">$orange50</Typography>
            <Typography color="neutral400" size="xs">
              #f6f8ff
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$orange100" }} />
            <Typography size="xs">$orange100</Typography>
            <Typography color="neutral400" size="xs">
              #edf0fe
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$orange200" }} />
            <Typography size="xs">$orange200</Typography>
            <Typography color="neutral400" size="xs">
              #dbe0fd
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$orange300" }} />
            <Typography size="xs">$orange300</Typography>
            <Typography color="neutral400" size="xs">
              #c1cbfc
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$orange400" }} />
            <Typography size="xs">$orange400</Typography>
            <Typography color="neutral400" size="xs">
              #a7b5fb
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$orange500" }} />
            <Typography size="xs">$orange500</Typography>
            <Typography color="neutral400" size="xs">
              #838ec6
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$orange600" }} />
            <Typography size="xs">$orange600</Typography>
            <Typography color="neutral400" size="xs">
              #6b74a0
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$orange700" }} />
            <Typography size="xs">$orange700</Typography>
            <Typography color="neutral400" size="xs">
              #555c80
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$orange800" }} />
            <Typography size="xs">$orange800</Typography>
            <Typography color="neutral400" size="xs">
              #444966
            </Typography>
          </Stack>
          <Stack gap="1">
            <Box css={{ backgroundColor: "$orange900" }} />
            <Typography size="xs">$orange900</Typography>
            <Typography color="neutral400" size="xs">
              #383c54
            </Typography>
          </Stack>
        </Grid>
      </Stack>
    </Stack>
  );
};

export const TypographyStory = () => {
  return (
    <Stack gap="2">
      <Typography size="lg">Typography</Typography>
      <Stack gap="4">
        <Typography size="xs" css={{ maxWidth: "40ch" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          excepturi soluta at mollitia facilis quis in id nulla doloremque
          itaque! Ab quas nisi sit magnam, ipsa ea quasi ratione est.
        </Typography>
        <Typography size="sm" css={{ maxWidth: "40ch" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          excepturi soluta at mollitia facilis quis in id nulla doloremque
          itaque! Ab quas nisi sit magnam, ipsa ea quasi ratione est.
        </Typography>
        <Typography size="md" css={{ maxWidth: "40ch" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          excepturi soluta at mollitia facilis quis in id nulla doloremque
          itaque! Ab quas nisi sit magnam, ipsa ea quasi ratione est.
        </Typography>
        <Typography size="lg" css={{ maxWidth: "40ch" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          excepturi soluta at mollitia facilis quis in id nulla doloremque
          itaque! Ab quas nisi sit magnam, ipsa ea quasi ratione est.
        </Typography>
        <Typography size="xl" css={{ maxWidth: "40ch" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          excepturi soluta at mollitia facilis quis in id nulla doloremque
          itaque! Ab quas nisi sit magnam, ipsa ea quasi ratione est.
        </Typography>
      </Stack>
    </Stack>
  );
};
TypographyStory.storyName = "Typography";

const colors = [
  "background",
  "foreground",
  "neutral0",
  "neutral50",
  "neutral100",
  "neutral200",
  "neutral300",
  "neutral400",
  "neutral500",
  "neutral600",
  "neutral700",
  "neutral800",
  "neutral900",
  "neutral1000",
  "blue50",
  "blue100",
  "blue200",
  "blue300",
  "blue400",
  "blue500",
  "blue600",
  "blue700",
  "blue800",
  "blue900",
  "blue",
  "primary50",
  "primary100",
  "primary200",
  "primary300",
  "primary400",
  "primary500",
  "primary600",
  "primary700",
  "primary800",
  "primary900",
  "primary",
  "orange50",
  "orange100",
  "orange200",
  "orange300",
  "orange400",
  "orange500",
  "orange600",
  "orange700",
  "orange800",
  "orange900",
  "orange",
];

const ElevationBox = styled("div", {
  width: 100,
  height: 100,
  backgroundColor: "$neutral0",
  borderRadius: "$sm",
  variants: {
    elevation: {
      xs: {
        elevation: "xs",
      },
      sm: {
        elevation: "sm",
      },
      md: {
        elevation: "md",
      },
      lg: {
        elevation: "lg",
      },
      xl: {
        elevation: "xl",
      },
    },
  },
});

const ElevationGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto minmax(0, 1fr)",
  justifyItems: "center",
  alignItems: "center",
  gap: "$5",
});

const SubtleSelect = createSelect(
  { variant: "outline", color: "neutral" },
  { textAlign: "left", width: 300 }
);

export const Elevation = () => {
  const [bgColor, setBgColor] = useState("neutral300");
  return (
    <Stack
      gap="2"
      css={{
        padding: "$3",
        borderRadius: "$sm",
        backgroundColor: "$" + bgColor,
        "--shadow-color": "$shadowColors-" + bgColor,
      }}
    >
      <Stack gap="1" dir="h" y-items="center">
        <Typography size="lg">Elevation</Typography>
        <SubtleSelect.Root value={bgColor} onValueChange={(x) => setBgColor(x)}>
          <SubtleSelect.Trigger />
          <SubtleSelect.Content>
            <SubtleSelect.Viewport>
              {colors.map((color) => (
                <SubtleSelect.Item key={color} value={color}>
                  <SubtleSelect.ItemText>{color}</SubtleSelect.ItemText>
                  <SubtleSelect.ItemIndicator />
                </SubtleSelect.Item>
              ))}
            </SubtleSelect.Viewport>
          </SubtleSelect.Content>
        </SubtleSelect.Root>
      </Stack>
      <ElevationGrid>
        {["xs", "sm", "md", "lg", "xl"].map((size) => (
          <Fragment key={size}>
            <Typography size="xs">elevation: {size}</Typography>
            <ElevationBox
              elevation={size as "xs" | "sm" | "md" | "lg" | "xl"}
            />
          </Fragment>
        ))}
      </ElevationGrid>
    </Stack>
  );
};

const RadiiBox = styled("div", {
  width: "$radii$xl",
  height: "$radii$xl",
  backgroundColor: "$neutral900",
});

export const Radii = () => {
  return (
    <Stack gap="2">
      <Typography size="lg">Radii</Typography>
      <Stack
        gap="6"
        x="start"
        y-items="center"
        css={{ gridTemplateColumns: "auto auto auto", rowGap: "$2" }}
      >
        <Typography>$xs</Typography>
        <Typography size="xs" color="neutral600">
          9px
        </Typography>
        <RadiiBox css={{ borderTopRightRadius: "$xs" }} />
        <Typography>$sm</Typography>
        <Typography size="xs" color="neutral600">
          21px
        </Typography>
        <RadiiBox css={{ borderTopRightRadius: "$sm" }} />
        <Typography>$md</Typography>
        <Typography size="xs" color="neutral600">
          40px
        </Typography>
        <RadiiBox css={{ borderTopRightRadius: "$md" }} />
        <Typography>$lg</Typography>
        <Typography size="xs" color="neutral600">
          74px
        </Typography>
        <RadiiBox css={{ borderTopRightRadius: "$lg" }} />
        <Typography>$xl</Typography>
        <Typography size="xs" color="neutral600">
          136px
        </Typography>
        <RadiiBox css={{ borderTopRightRadius: "$xl" }} />
      </Stack>
    </Stack>
  );
};

const space = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
const spaceAmounts = [
  "9px",
  "12px",
  "19px",
  "31px",
  "34px",
  "53px",
  "62px",
  "65px",
  "96px",
  "115px",
  "127px",
];

const SpaceBox = styled("div", {
  height: 50,
  backgroundColor: "$neutral900",
});

export const Spacing = () => {
  return (
    <Stack gap="2">
      <Typography size="lg">Spacing Units</Typography>
      <Stack
        gap="6"
        x="start"
        y-items="center"
        css={{ gridTemplateColumns: "auto auto auto", rowGap: "$2" }}
      >
        {space.map((size, i) => (
          <Fragment key={size}>
            <Typography>${size}</Typography>
            <Typography size="xs" color="neutral600">
              {spaceAmounts[i]}
            </Typography>
            <SpaceBox css={{ width: "$space$" + size }} />
          </Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

const PaddingBox = styled("div", {
  backgroundColor: "$neutral900",
  color: "$background",
});
const PaddingInnerElement = styled("div", {
  width: 10,
  height: 10,
  backgroundColor: "$background",
  borderRadius: "$circular",
});

export const Padding = () => {
  return (
    <Stack gap="2">
      <Typography size="lg">Padding</Typography>
      <Typography>
        Padding contains the defaults paddings available for components
      </Typography>
      <Stack
        x="start"
        y-items="center"
        x-items="start"
        gap="2"
        css={{ gridTemplateColumns: "auto auto" }}
      >
        {["xs", "sm", "md", "lg", "xl"].map((size) => (
          <Fragment key={size}>
            <Typography>{size}</Typography>
            <PaddingBox
              css={{
                paddingInline: "$padInline$" + size,
                paddingBlock: "$padBlock$" + size,
              }}
            >
              <PaddingInnerElement />
            </PaddingBox>
          </Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

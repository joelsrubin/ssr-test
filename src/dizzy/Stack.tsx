import { styled } from "./stitches.config";

export const Stack = styled("div", {
  display: "grid",
  listStyle: "none",
  padding: "0",
  variants: {
    dir: {
      h: {
        gridAutoFlow: "column",
      },
      v: {
        gridAutoFlow: "row",
      },
    },
    gap: {
      "1": {
        gap: "5px",
      },
      "2": {
        gap: "10px",
      },
      "3": {
        gap: "15px",
      },
      "4": {
        gap: "20px",
      },
      "5": {
        gap: "25px",
      },
      "6": {
        gap: "30px",
      },
      "7": {
        gap: "35px",
      },
      "8": {
        gap: "40px",
      },
      "9": {
        gap: "45px",
      },
      "10": {
        gap: "50px",
      },
      "11": {
        gap: "55px",
      },
      "12": {
        gap: "60px",
      },
      "13": {
        gap: "65px",
      },
      "14": {
        gap: "70px",
      },
      "15": {
        gap: "75px",
      },
      "16": {
        gap: "80px",
      },
      "17": {
        gap: "85px",
      },
      "18": {
        gap: "90px",
      },
      "19": {
        gap: "95px",
      },
      "20": {
        gap: "100px",
      },
    },
    x: {
      start: {
        "justify-content": "start",
      },
      center: {
        "justify-content": "center",
      },
      "space-between": {
        "justify-content": "space-between",
      },
      "space-around": {
        "justify-content": "space-around",
      },
      "space-evenly": {
        "justify-content": "space-evenly",
      },
      end: {
        "justify-content": "end",
      },
    },
    "x-items": {
      normal: {
        "justify-items": "normal",
      },
      stretch: {
        "justify-items": "stretch",
      },
      center: {
        "justify-items": "center",
      },
      start: {
        "justify-items": "start",
      },
      end: {
        "justify-items": "end",
      },
      baseline: {
        "justify-items": "baseline",
      },
      "first baseline": {
        "justify-items": "first baseline",
      },
      "last baseline": {
        "justify-items": "last baseline",
      },
    },
    y: {
      start: {
        "align-content": "start",
      },
      center: {
        "align-content": "center",
      },
      "space-between": {
        "align-content": "space-between",
      },
      "space-around": {
        "align-content": "space-around",
      },
      "space-evenly": {
        "align-content": "space-evenly",
      },
      end: {
        "align-content": "end",
      },
    },
    "y-items": {
      normal: {
        "align-items": "normal",
      },
      stretch: {
        "align-items": "stretch",
      },
      center: {
        "align-items": "center",
      },
      start: {
        "align-items": "start",
      },
      end: {
        "align-items": "end",
      },
      baseline: {
        "align-items": "baseline",
      },
      "first baseline": {
        "align-items": "first baseline",
      },
      "last baseline": {
        "align-items": "last baseline",
      },
    },
  },
  defaultVariants: {
    dir: "v",
  },
});

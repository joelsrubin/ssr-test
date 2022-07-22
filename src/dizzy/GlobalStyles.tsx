import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "@import": "https://www.unpkg.com/tailwindcss@0.7.4/dist/preflight.min.css",
  html: {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "--shadow-color": "0 0% 50%",
  },
  "html body": {
    fontFamily: "monolisa",
    backgroundColor: "$colors$background",
    color: "$colors$foreground",
  },
  ".ladle-wrapper, .ladle-main": {
    backgroundColor: "$colors$background",
    color: "$colors$foreground",
  },
});

export function GlobalStyles() {
  globalStyles();
  return null;
}

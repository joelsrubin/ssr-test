import { Html, Head, Main, NextScript } from "next/document";
import { MagicScriptTag } from "../services/ssr-code";

export default function Document() {
  return (
    <Html>
      <Head />
      <MagicScriptTag />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

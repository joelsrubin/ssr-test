import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRef } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;

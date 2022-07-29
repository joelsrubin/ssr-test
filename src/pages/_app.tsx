import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRef } from "react";
import { RoomProvider } from "../../liveblocks.config";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = useRef(new QueryClient());
  const { query: slug } = useRouter();

  return (
    <QueryClientProvider client={queryClient.current}>
      <RoomProvider id={`${slug}`}>
        <Component {...pageProps} />
      </RoomProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;

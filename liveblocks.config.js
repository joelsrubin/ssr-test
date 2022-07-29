import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import { env } from "process";
const client = createClient({
  //   publicApiKey: env("PUBLIC_API_KEY"),
  publicApiKey: "pk_live_8h4nZLUwaJ0nJ_yy8Uey9rUr",
});

export const { RoomProvider, useOthers } = createRoomContext(client);

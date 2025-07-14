import type { NextjsBkndConfig } from "bknd/adapter/nextjs";

export default {
  connection: {
    url: "file:data.db"
  },
} satisfies NextjsBkndConfig;

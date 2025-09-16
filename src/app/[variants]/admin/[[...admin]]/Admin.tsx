"use client";

import { type BkndAdminProps, Admin } from "bknd/ui";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AppTheme } from "@/types";

export function AdminComponent({ config, ...props }: BkndAdminProps) {
  const [ready, setReady] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") setReady(true);
  }, []);
  if (!ready) return null;

  return <Admin {...props} config={{ theme: theme as AppTheme, ...config }} />;
}

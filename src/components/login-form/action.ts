"use server";

import { getApi } from "@/bknd";
import type { LoginFormValues } from "./index";

export const loginAction = async (values: LoginFormValues) => {
  const api = await getApi();
  const { data } = await api.auth.register("password", {
    email: values.email,
    password: values.password,
  });
  console.log("loginAction", data);
};

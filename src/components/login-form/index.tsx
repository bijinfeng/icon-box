"use client";

import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { cn } from "@iconbox/ui/lib/utils";
import { Button } from "@iconbox/ui/components/button";
import { Card, CardContent } from "@iconbox/ui/components/card";
import { Input } from "@iconbox/ui/components/input";
import { Label } from "@iconbox/ui/components/label";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  useForm,
  zodResolver,
} from "@iconbox/ui/components/form";

import { loginAction } from "./action";

const formSchema = z.object({
  email: z.string().email("邮箱格式不正确"),
  password: z.string().min(8, "密码长度至少为8位"),
});

export type LoginFormValues = z.infer<typeof formSchema>;

export type LoginFormProps = Omit<React.ComponentProps<"div">, "onSubmit">;

export function LoginForm({ className, children, ...props }: LoginFormProps) {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form className="p-6 md:p-8" onSubmit={form.handleSubmit(loginAction)}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-muted-foreground text-balance">Login to your Acme Inc account</p>
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>邮箱</FormLabel>
                      <FormControl>
                        <Input placeholder="m@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <Label htmlFor="password">密码</Label>
                        <Link href="/forgot-password" className="ml-auto text-sm underline-offset-2 hover:underline">
                          忘记密码?
                        </Link>
                      </div>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  登录
                </Button>

                {children}

                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/sign-up" className="underline underline-offset-4">
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </Form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src="/placeholder.svg"
              width={1200}
              height={1200}
              alt="Image"
              priority
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}

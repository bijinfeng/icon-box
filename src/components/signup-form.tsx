"use client";

import Link from "next/link";
import Image from "next/image";
import { z } from "zod";

import { cn } from "@iconbox/ui/lib/utils";
import { Button } from "@iconbox/ui/components/button";
import { Card, CardContent } from "@iconbox/ui/components/card";
import { Input } from "@iconbox/ui/components/input";
import { Password, passwordSchema } from "@iconbox/ui/components/password";
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

import { OAuthButtons } from "@/components/oauth-buttons";

const formSchema = z.object({
  email: z.string().email("邮箱格式不正确"),
  password: passwordSchema,
});

export function SignUpForm({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Create an account</h1>
                  <p className="text-muted-foreground text-balance">
                    Let&apos;s get started. Fill in the details below to create your account.
                  </p>
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
                      <FormLabel>密码</FormLabel>
                      <FormControl>
                        <Password {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  注册
                </Button>

                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">第三方账号</span>
                </div>

                <OAuthButtons />

                <div className="text-center text-sm">
                  Already have account?{" "}
                  <Link href="/login" className="underline underline-offset-4">
                    Sign in
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

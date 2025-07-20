import Link from "next/link";

import { Card, CardContent } from "@iconbox/ui/components/card";
import { Input } from "@iconbox/ui/components/input";
import { Button } from "@iconbox/ui/components/button";
import { OAuthButtons } from "@/components/oauth-buttons";
import {
  z,
  Form,
  useForm,
  zodResolver,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@iconbox/ui/components/form";
import { Password } from "packages/ui/src/components/password";

export const Start = () => {
  const formSchema = z.object({
    email: z.string().email("无效的邮箱地址"),
    password: z.string().min(8, "密码至少8位").max(100, "密码最多100位"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-muted-foreground text-balance">
                  Let&apos;s get started. Fill in the details below to create your account.
                </p>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8"></form>
            </Form>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>邮箱</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="block text-sm text-destructive" />
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
                  <FormMessage className="block text-sm text-destructive" />
                </FormItem>
              )}
            />

            <Button type="submit">注册</Button>

            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-card text-muted-foreground relative z-10 px-2">第三方账号</span>
            </div>

            <OAuthButtons />

            <div className="text-center text-sm">
              Already have account?{" "}
              <Link className="underline underline-offset-4" href="/sign-in">
                Sign in
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

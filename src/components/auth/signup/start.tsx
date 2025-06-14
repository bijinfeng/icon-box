import * as SignUp from '@clerk/elements/sign-up'
import { Card, CardContent } from "@iconbox/ui/components/card";
import { Label } from "@iconbox/ui/components/label"
import { Input } from "@iconbox/ui/components/input";
import { Button } from "@iconbox/ui/components/button";
import { LoaderCircle } from 'lucide-react'
import { OAuthButtons } from "@/components/oauth-buttons";

import * as Clerk from '@clerk/elements/common'

interface StartProps {
  loading?: boolean
}

export const Start = (props: StartProps) => {
  const { loading } = props;

  return (
    <SignUp.Step name="start">
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

              <Clerk.Field name="emailAddress">
                <Clerk.Label asChild>
                  <Label>Email address</Label>
                </Clerk.Label>
                <Clerk.Input type="email" required asChild>
                  <Input />
                </Clerk.Input>
                <Clerk.FieldError className="block text-sm text-destructive" />
              </Clerk.Field>
              <Clerk.Field name="password" className="space-y-2">
                <Clerk.Label asChild>
                  <Label>Password</Label>
                </Clerk.Label>
                <Clerk.Input type="password" required asChild>
                  <Input />
                </Clerk.Input>
                <Clerk.FieldError className="block text-sm text-destructive" />
              </Clerk.Field>

              <SignUp.Captcha className="empty:hidden" />
              <SignUp.Action submit asChild>
                <Button disabled={loading}>
                  <Clerk.Loading>
                    {(isLoading) => {
                      return isLoading ? (
                        <LoaderCircle className="size-4 animate-spin" />
                      ) : (
                        'Continue'
                      )
                    }}
                  </Clerk.Loading>
                </Button>
              </SignUp.Action>

              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">第三方账号</span>
              </div>

              <OAuthButtons />

              <div className="text-center text-sm">
                Already have account?{" "}
                <Clerk.Link className="underline underline-offset-4" navigate="sign-in">Sign in</Clerk.Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SignUp.Step>
  )
}

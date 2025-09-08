import { LoginForm } from "@/components/login-form"
import { OAuthButtons } from "@/components/oauth-buttons";

export default async function LoginPage() {
  return (
    <div className="w-full max-w-sm md:max-w-3xl">
      <LoginForm>
        <OAuthButtons />
      </LoginForm>
    </div>
  )
}

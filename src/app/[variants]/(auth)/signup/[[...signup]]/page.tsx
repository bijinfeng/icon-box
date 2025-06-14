'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

import { Start } from '@/components/auth/signup/start'

export default function SignUpPage() {
  return (
    <div className="w-full max-w-sm md:max-w-3xl">
      <SignUp.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <Start loading={isGlobalLoading} />
            </>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  );
}

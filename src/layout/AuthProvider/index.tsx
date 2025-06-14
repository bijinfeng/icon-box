'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { PropsWithChildren, memo } from 'react';

import UserUpdater from './UserUpdater';

const AuthProvider = memo(({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider
      // appearance={appearance}
      // localization={localization}
      signUpUrl='/signup' // Redirect sign-up to sign-in if disabled
    >
      {children}
      <UserUpdater />
    </ClerkProvider>
  )
});

export default AuthProvider;

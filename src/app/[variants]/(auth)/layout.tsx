import { PropsWithChildren } from 'react';

const Page = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      { children }
    </div>
  )
}

export default Page;

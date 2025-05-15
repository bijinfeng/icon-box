"use client"

import { useRouter } from 'next/navigation'

import { Button } from '@iconbox/ui/components/button'

export const ErrorButtons = () => {
  const router = useRouter()
  
  return (
    <div className='mt-6 flex gap-4'>
      <Button variant='outline' onClick={() => router.back()}>
        Go Back
      </Button>
      <Button onClick={() => router.push("/")}>Back to Home</Button>
    </div>
  );
}

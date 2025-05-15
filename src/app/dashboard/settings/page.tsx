import { Main } from '@/components/layout/main'
import { Separator } from '@iconbox/ui/components/separator'

export default function SettingPage() {
  return (
    <Main fixed>
      <div className='space-y-0.5'>
        <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
          Settings
        </h1>
        <p className='text-muted-foreground'>
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className='my-4 lg:my-6' />
    </Main>
  )
}

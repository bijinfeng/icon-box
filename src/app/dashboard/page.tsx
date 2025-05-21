import { Separator } from '@iconbox/ui/components/separator'
import { IconCard } from '@/components/icon-card'
import { IconDetail } from '@/components/icon-detail'

export default function Page() {
  return (
    <div className='@container/main flex flex-1'>
      <div className='flex-1 @xl/main:grid-cols-2 @5xl/main:grid-cols-6 grid grid-cols-1 gap-4 p-4 h-max'>
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
      </div>
      <Separator orientation="vertical" />
      <IconDetail />
    </div>
  )
}

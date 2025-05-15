"use client"

import { ArrowDownWideNarrow, Cog } from 'lucide-react';
import { useRouter } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@iconbox/ui/components/select"
import { Button } from "@iconbox/ui/components/button"
import { ModeToggle } from '@/components/theme/theme-switch';
import { UserNav } from '@/components/layout/user-nav'

const zoomLeves = [100, 125, 150, 175, 200]
const iconSizes = [8, 10, 12, 16, 18, 20, 24, 32, 40, 48, 64, 72, 96, 128, 256]

export const IconFilter = () => {
  const router = useRouter()
  
  return (
    <div className="flex items-center gap-2">
      <Select>
        <SelectTrigger className="w-32" size="sm">
          <ArrowDownWideNarrow />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort Icons</SelectLabel>
            <SelectItem value="date">By Date</SelectItem>
            <SelectItem value="name">By Name</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-24" size="sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Zoom Level</SelectLabel>
            {zoomLeves.map(level => (
              <SelectItem key={level} value={level.toString()}>
                {level}%
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>View Icons As</SelectLabel>
            {iconSizes.map(size => (
              <SelectItem key={size} value={size.toString()}>
                {size}px
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <ModeToggle />

      <Button variant="outline" size='icon' className='scale-95' onClick={() => router.push("/dashboard/settings")}>
        <Cog className="h-[1.2rem] w-[1.2rem]" />
      </Button>

      <UserNav />
    </div>
  )
}

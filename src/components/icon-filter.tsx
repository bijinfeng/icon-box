import { ArrowDownWideNarrow } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ModeToggle } from '@/components/theme-switch';

const zoomLeves = [100, 125, 150, 175, 200]
const iconSizes = [8, 10, 12, 16, 18, 20, 24, 32, 40, 48, 64, 72, 96, 128, 256]

export const IconFilter = () => {
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
    </div>
  )
}

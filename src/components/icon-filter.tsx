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

export const IconFilter = () => {
  return (
    <div className="flex items-center gap-2">
      <Select>
        <SelectTrigger className="w-32" size="sm">
          <ArrowDownWideNarrow />
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort Icons</SelectLabel>
            <SelectItem value="date">By Date</SelectItem>
            <SelectItem value="name">By Name</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

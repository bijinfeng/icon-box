"use client"

import * as React from "react"
import { Moon, Sun, Check } from "lucide-react"
import { useTheme } from "next-themes"
import { upperFirst } from 'lodash-es'

import { cn } from '@iconbox/ui/lib/utils'
import { Button } from "@iconbox/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@iconbox/ui/components/dropdown-menu"

interface ModeToggleProps extends React.ComponentProps<typeof Button> {}

export function ModeToggle(props: ModeToggleProps) {
  const { className, ...rest } = props
  const { themes, theme, setTheme } = useTheme()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn('scale-95 h-8 w-8 px-0', className)} {...rest}>
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((it) => (
          <DropdownMenuItem key={it} onClick={() => setTheme(it)}>
            {upperFirst(it)}
            <Check size={14} className={cn('ml-auto', it !== theme && 'hidden')} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

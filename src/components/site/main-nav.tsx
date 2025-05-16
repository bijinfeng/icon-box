"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@iconbox/ui/lib/utils"

import { siteConfig } from "@/config/site"
import { NavLinkItem } from '@/types'

const navs: NavLinkItem[] = [
  {
    title: "首页",
    href: "/"
  },
  {
    title: "资源管理",
    href: "/dashboard",
  },
  {
    title: "帮助",
    href: '/docs'
  }
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {navs.map(nav => (
          <Link
            key={nav.href}
            href={nav.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === nav.href
                ? "text-foreground"
                : "text-foreground/80"
            )}
          >
            {nav.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

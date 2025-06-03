"use client"

import type { FC, PropsWithChildren } from "react";
import { Search } from "lucide-react"

import { Input } from '@iconbox/ui/components/input'
import { Separator } from "@iconbox/ui/components/separator"
import { Label } from "@iconbox/ui/components/label"
import { SidebarInset, SidebarProvider } from "@iconbox/ui/components/sidebar"

import { IconFilter } from '@/components/icon-filter'
import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar"
import { AddIcon } from "@/components/add-icon"
// import { trpcQuery } from "@/utils/trpc";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  // const { data } = trpcQuery.hello.useQuery({ text: "xxx" })

  // console.log(data)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex px-4 h-16 shrink-0 items-center border-b justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2">
            <AddIcon />
            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-4"
            />
            <div className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <Input id="search" placeholder="Search the docs..." className="pl-8 w-64 h-8" />
              <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </div>
          </div>
          <IconFilter />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout

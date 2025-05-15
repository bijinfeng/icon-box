import type { FC, PropsWithChildren } from "react";
import { Search } from "lucide-react"

import { Input } from '@iconbox/ui/components/input'
import { Separator } from "@iconbox/ui/components/separator"
import { SidebarTrigger } from "@iconbox/ui/components/sidebar"
import { Label } from "@iconbox/ui/components/label"
import { IconFilter } from '@/components/icon-filter'
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@iconbox/ui/components/sidebar"

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex px-4 h-16 shrink-0 items-center border-b justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <div className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <Input id="search" placeholder="Search the docs..." className="pl-8 w-64 h-8 border-0 shadow-none" />
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

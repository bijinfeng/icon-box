import { type LucideIcon } from "lucide-react";

export interface MainSidebarItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
}

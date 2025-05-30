import { siteConfig } from "@/config/site"
import { ModeToggle } from '@/components/theme/theme-switch'

export function SiteFooter() {
  return (
    <footer className="border-grid border-t py-6 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4 flex items-cente justify-between">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.profile}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              bijinfeng
            </a>
            . The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
          <ModeToggle variant="ghost" />
        </div>
      </div>
    </footer>
  )
}

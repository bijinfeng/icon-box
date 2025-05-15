import { SiteHeader } from '@/components/site/site-header'

export default function Home() {
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      <div className="border-grid flex flex-1 flex-col">
        <SiteHeader />
      </div>
    </div>
  );
}

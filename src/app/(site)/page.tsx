import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/site/page-header"
import { Button } from "@iconbox/ui/components/button"
import Link from "next/link"

const title = "Hi，欢迎来到Iconbox图标平台"
const description = "有效管理团队图标库，开发者灵活调用"

export default function Page() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href="/docs/installation">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href="/blocks">Browse Blocks</Link>
          </Button>
        </PageActions>
      </PageHeader>
    </>
  )
}

import { Separator } from "@iconbox/ui/components/separator";
import { Button } from "@iconbox/ui/components/button";

export default function NewProject() {
  return (
    <div className="lg:max-w-2xl mt-10 mx-auto w-full">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">新建项目</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />

        <form className="space-y-8">
          <Button type="submit">新建项目</Button>
        </form>
      </div>
    </div>
  );
}

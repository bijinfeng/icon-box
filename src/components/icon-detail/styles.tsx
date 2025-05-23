import { Label } from "@iconbox/ui/components/label";

export const Styles = () => {
  return (
    <div className="px-3 py-4">
      <Label className="mb-4">Style</Label>

      <div className="space-y-2">
        <div className="flex items-center">
          <Label className="text-muted-foreground">Stroke</Label>
          <div></div>
        </div>
      </div>
    </div>
  );
};

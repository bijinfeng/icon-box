import { Button } from "@iconbox/ui/components/button";
import { Copy, Settings, Download, PenTool, FolderPlus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@iconbox/ui/components/select";

export const Actions = () => {
  return (
    <div className="px-3 py-4 space-y-2">
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm">
          Copy
          <Copy />
        </Button>
        as
        <Select>
          <SelectTrigger className="w-24" size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Format</SelectLabel>
              <SelectItem value="svg">SVG</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Settings size={16} />
      </div>
      <Button variant="outline" size="sm" className="w-full justify-between">
        Add to Project <FolderPlus />
      </Button>
      <Button variant="outline" size="sm" className="w-full justify-between">
        Edit <PenTool />
      </Button>
      <Button variant="secondary" size="sm" className="w-full justify-between">
        Export <Download />
      </Button>
    </div>
  );
};

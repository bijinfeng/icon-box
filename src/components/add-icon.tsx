import { useId } from "react";
import Link from "next/link";
import { Button } from "@iconbox/ui/components/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@iconbox/ui/components/dialog";
import { Checkbox } from "@iconbox/ui/components/checkbox";
import { Label } from "packages/ui/src/components/label";
import { ImagePlus } from "lucide-react";
import { FileUpload } from "@/components/file-upload";

export const AddIcon = () => {
  const id = useId();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline" className="size-8 cursor-pointer">
          <ImagePlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            上传图标
          </DialogTitle>
          <div className="px-6 py-4">
            <FileUpload />
          </div>
        </DialogHeader>
        <DialogFooter className="border-t px-6 py-4 sm:items-center">
          <div className="grow flex items-center gap-2">
            <Checkbox id={id} />
            <Label htmlFor={id}>SVGO optimize icon.</Label>
            <Link
              className="text-sm leading-none underline underline-offset-4 hover:text-primary"
              href=""
            >
              Learn more
            </Link>
          </div>
          <DialogClose asChild>
            <Button type="button" size="sm">
              上传
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

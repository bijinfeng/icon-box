import { FileUpIcon, XIcon, ImageIcon } from "lucide-react";
import { Button } from "@iconbox/ui/components/button";

export const FileUpload = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Drop area */}
      <div
        role="button"
        className="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 flex min-h-40 flex-col items-center justify-center rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[input:focus]:ring-[3px]"
      >
        <input className="sr-only" aria-label="Upload files" />

        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <FileUpIcon className="size-4 opacity-60" />
          </div>
          <p className="mb-1.5 text-sm font-medium">Upload files</p>
          <p className="text-muted-foreground mb-2 text-xs">
            Drag & drop or click to browse
          </p>
          <div className="text-muted-foreground/70 flex flex-wrap justify-center gap-1 text-xs">
            <span>All files</span>
            <span>∙</span>
            <span>Max 1 files</span>
            <span>∙</span>
            <span>Up to 100MB</span>
          </div>
        </div>
      </div>

      {/* {errors.length > 0 && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )} */}

      {/* File list */}
      <div className="space-y-2">
        <div className="bg-background flex items-center justify-between gap-2 rounded-lg border p-2 pe-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded border">
              <ImageIcon className="size-4 opacity-60" />
            </div>
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="truncate text-[13px] font-medium">document.pdf</p>
              <p className="text-muted-foreground text-xs">516.34KB</p>
            </div>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent"
            aria-label="Remove file"
          >
            <XIcon className="size-4" aria-hidden="true" />
          </Button>
        </div>

        {/* Remove all files button */}
        <div>
          <Button size="sm" variant="outline">
            Remove all files
          </Button>
        </div>
      </div>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-center text-xs"
      >
        Multiple files uploader w/ list ∙{" "}
        <a
          href="https://github.com/origin-space/originui/tree/main/docs/use-file-upload.md"
          className="hover:text-foreground underline"
        >
          API
        </a>
      </p>
    </div>
  );
};

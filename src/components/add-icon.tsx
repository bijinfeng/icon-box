import { Button } from '@iconbox/ui/components/button'
import { Dialog, DialogTrigger, DialogContent } from '@iconbox/ui/components/dialog'
import { ImagePlus } from "lucide-react"

export const AddIcon = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline" className="size-8 cursor-pointer">
          <ImagePlus />
        </Button>
      </DialogTrigger>
      <DialogContent></DialogContent>
    </Dialog>
  )
}
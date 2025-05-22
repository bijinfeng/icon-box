import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from '@iconbox/ui/components/context-menu'

export const IconCard = () => {
  const renderSets = () => (
    <ContextMenuSubContent>
      <ContextMenuItem>新增预设</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>预设一</ContextMenuItem>
      <ContextMenuItem>预设二</ContextMenuItem>
      <ContextMenuItem>预设三</ContextMenuItem>
      <ContextMenuItem>预设四</ContextMenuItem>
    </ContextMenuSubContent>
  )

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
          <div className="h-16 flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-aarrow-down-icon lucide-a-arrow-down"
            >
              <path d="M3.5 13h6" />
              <path d="m2 16 4.5-9 4.5 9" />
              <path d="M18 7v9" />
              <path d="m14 12 4 4 4-4" />
            </svg>
          </div>

          <div className="w-full text-xs leading-[18px] text-center">
            <div className="text-sm font-medium">move-file</div>
            <div className="font-normal text-muted-foreground">移动文件</div>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className='w-48'>
        <ContextMenuSub>
          <ContextMenuSubTrigger>复制到预设</ContextMenuSubTrigger>
          {renderSets()}
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>移动到预设</ContextMenuSubTrigger>
          {renderSets()}
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>添加到项目</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>新增项目</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>项目一</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>复制</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>复制成 SVG</ContextMenuItem>
            <ContextMenuItem>复制成 JSX</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>修改样式</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Outline</ContextMenuItem>
            <ContextMenuItem>Outline Duo</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>修改图标</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          删除图标
          <ContextMenuShortcut>Ctrl+Del</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          导出
          <ContextMenuShortcut>Ctrl+E</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  return (
    <div className="mdx">{code}</div>
  )
}

import type React from "react"

interface SeoHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  id?: string
}

export function SeoHeading({ level, children, className = "", id }: SeoHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag id={id} className={className}>
      {children}
    </Tag>
  )
}

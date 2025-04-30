"use client"

import { usePathname } from "next/navigation"
import Head from "next/head"

interface CanonicalUrlProps {
  path?: string
}

export function CanonicalUrl({ path }: CanonicalUrlProps) {
  const pathname = usePathname()
  const url = `https://solveside.co.za${path || pathname}`

  return (
    <Head>
      <link rel="canonical" href={url} />
    </Head>
  )
}

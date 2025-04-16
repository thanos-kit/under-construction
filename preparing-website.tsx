"use client"

import { HardHat, Hammer } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function UnderConstruction() {
  const [dots, setDots] = useState(".")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "."
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="flex flex-col items-center space-y-6 text-center">
        <div className="relative">
          <HardHat className="h-16 w-16 text-yellow-500" />
          <Hammer className="h-8 w-8 text-gray-700 absolute -bottom-2 -right-2 transform rotate-12" />
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">Under Construction</h1>
        <p className="text-muted-foreground max-w-md">Mock server, server templates, and UI kits
everything you need to build fast and win faster. ⚡</p>

        <div className="mt-12 pt-8 border-t border-gray-200 w-full max-w-md">
          <Image src="/images/thanos-banner.svg" alt="Thanos Logo" width={150} height={45} className="mx-auto" />
        </div>
      </div>
    </div>
  )
}

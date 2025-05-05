"use client"

import { useCallback } from "react"

/**
 * A hook that provides smooth scrolling functionality to page sections
 * @returns A function that scrolls to the specified element ID
 */
export const useSmartScroll = () => {
  const goTo = useCallback((elementId: string) => {
    // Find the element by ID
    const element = document.getElementById(elementId)

    // If element exists, scroll to it smoothly
    if (element) {
      // Small delay to ensure any state changes have completed
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
    }
  }, [])

  return goTo
}

import type { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`px-10.5 mx-auto w-full max-w-7xl ${className}`}>{children}</div>
  )
}

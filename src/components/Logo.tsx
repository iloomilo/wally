import Image from "next/image"
import logo from "../../public/brand/wally-logo.png"

type LogoProps = {
  width?: number
  className?: string
}

export default function Logo({ width = 160, className }: LogoProps) {
  return (
    <Image
      src={logo}
      loading="eager"
      alt="Wally Logo"
      className={className}
      style={{ width, height: "auto" }}
    />
  )
}

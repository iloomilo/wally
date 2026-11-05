import Image from "next/image"
import { BookmarkIcon } from "lucide-react"

export type WallpaperCardProps = {
  title: string
  imageUrl: string
  uploaded_by: string
  height: number
  width: number
  saves: number
  colors?: string[]
  sizes?: string
}

const saveCountFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
})

export default function WallpaperCard({
  title,
  imageUrl,
  uploaded_by,
  height,
  width,
  saves,
  colors = [],
  sizes,
}: WallpaperCardProps) {
  return (
    <article className="flex min-w-0 flex-col gap-4">
      <div className="aspect-16/10 overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt={title}
          width={width}
          height={height}
          sizes={sizes}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-start justify-between gap-3 px-1">
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="truncate font-mono text-lg leading-snug font-semibold text-foreground" title={title}>
            {title}
          </h3>
          <span className="truncate text-sm leading-snug text-muted-foreground" title={`by ${uploaded_by}`}>
            by {uploaded_by}
          </span>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2 text-muted-foreground">
          <span
            className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground"
            aria-label={`${saves} saves`}
          >
            <BookmarkIcon className="size-4" aria-hidden="true" />
            {saveCountFormatter.format(saves).toLowerCase()}
          </span>
          {colors.length > 0 && (
            <div className="flex gap-1" aria-hidden="true">
              {colors.slice(0, 3).map((color, index) => (
                <span
                  key={`${color}-${index}`}
                  className="size-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

import Header from "@/components/Header";
import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";
import Container from "@/components/Container";
import WallpaperCard from "@/components/WallpaperCard";
import { wallpapers } from "@/data/wallpapers";
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-6">
        <Container>
          <h1 className="text-4xl mb-6">Discover wallpapers</h1>
          <div className="flex items-center gap-0.5">
            <InputGroup className="h-14.5 rounded-l-full rounded-r-lg">
              <InputGroupInput
                type="search"
                aria-label="Search wallpapers, tags, or colors"
                className="h-full pl-3.5 pr-5.5 text-[0.9375rem] md:text-[0.9375rem]"
                placeholder="Search wallpapers, tags, or colors"
              />
              <InputGroupAddon className="pl-5.5">
                <SearchIcon className="size-5.5" aria-hidden="true" />
              </InputGroupAddon>
            </InputGroup>
            <Button
              type="button"
              className="h-14.5 gap-2.5 rounded-l-lg rounded-r-full border-0 px-5 text-sm font-semibold"
            >
              <SlidersHorizontalIcon className="size-5" aria-hidden="true" />
              Filters
            </Button>
          </div>
          <section
            aria-label="Wallpapers"
            className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 pb-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          >
            {wallpapers.map(({ id, ...wallpaper }) => (
              <WallpaperCard
                key={id}
                {...wallpaper}
                sizes="(min-width: 1536px) 25vw, (min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            ))}
          </section>
        </Container>
      </main>
    </div>
  );
}

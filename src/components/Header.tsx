import Logo from "./Logo";
import Container from "./Container";

export default function Header() {
  return (
    <header className="py-4 ">
      <Container className="flex justify-between items-center">
        <Logo />

        <div className="flex gap-4 items-center">
          <span>Alex</span>
          <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
            <span className="text-black">ak</span>
          </div>
        </div>
      </Container>
    </header>
  )
}

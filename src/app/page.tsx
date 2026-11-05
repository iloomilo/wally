import Header from "@/components/Header";
import Container from "@/components/Container";
import Input from "@/components/Input";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-6">
        <Container>
          <h1 className="text-4xl">Discover wallpapers</h1>
          <Input placeholder="Search for wallpapers..." />
        </Container>
      </main>
    </div>
  );
}

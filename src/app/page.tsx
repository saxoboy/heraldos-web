import { ModeToggle } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start p-24">
      <div>
        <div>
          <Button>Click me</Button>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}

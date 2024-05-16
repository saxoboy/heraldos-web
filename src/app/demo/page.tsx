import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start container">
      <Separator />
      <h1 className="text-4xl font-bold font-display">Aqui un titulo bold</h1>
      <h1 className="text-4xl font-body italic font-thin">
        Aqui un titulo normal y body
      </h1>
      <h1 className="text-4xl font-display">Aqui un titulo thin display</h1>
      <h1 className="text-4xl font-thin italic">Aqui un titulo nada</h1>
      <Separator />
      <p className="bg-background text-foreground">
        bg-background text-foreground * Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Exercitationem in enim nobis repellat cumque amet,
        perspiciatis molestiae minus odit veniam. Dicta quam fugit pariatur
        aperiam nulla architecto dolorum voluptatem rerum!
      </p>
      <p className="bg-card text-card-foreground">
        bg-card text-card-foreground * Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Exercitationem in enim nobis repellat cumque amet,
        perspiciatis molestiae minus odit veniam. Dicta quam fugit pariatur
        aperiam nulla architecto dolorum voluptatem rerum!
      </p>
      <p className="bg-popover text-popover-foreground">
        bg-popover text-popover-foreground * Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Exercitationem in enim nobis repellat
        cumque amet, perspiciatis molestiae minus odit veniam. Dicta quam fugit
        pariatur aperiam nulla architecto dolorum voluptatem rerum!
      </p>
      <p className="bg-primary text-primary-foreground">
        bg-primary text-primary-foreground * Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Exercitationem in enim nobis repellat
        cumque amet, perspiciatis molestiae minus odit veniam. Dicta quam fugit
        pariatur aperiam nulla architecto dolorum voluptatem rerum!
      </p>
      <p className="bg-destructive text-destructive-foreground">
        bg-destructive text-destructive-foreground * Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Exercitationem in enim nobis repellat
        cumque amet, perspiciatis molestiae minus odit veniam. Dicta quam fugit
        pariatur aperiam nulla architecto dolorum voluptatem rerum!
      </p>
      <p className="bg-secondary text-secondary-foreground">
        bg-secondary text-secondary-foreground * Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Exercitationem in enim nobis repellat
        cumque amet, perspiciatis molestiae minus odit veniam. Dicta quam fugit
        pariatur aperiam nulla architecto dolorum voluptatem rerum!
      </p>
      <p className="bg-muted text-muted-foreground">
        bg-muted text-muted-foreground * Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Exercitationem in enim nobis repellat cumque amet,
        perspiciatis molestiae minus odit veniam. Dicta quam fugit pariatur
        aperiam nulla architecto dolorum voluptatem rerum!
      </p>
      <p className="bg-accent text-accent-foreground">
        bg-accent text-accent-foreground * Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Exercitationem in enim nobis repellat
        cumque amet, perspiciatis molestiae minus odit veniam. Dicta quam fugit
        pariatur aperiam nulla architecto dolorum voluptatem rerum!
      </p>
      <Separator />
      <div className="flex flex-col gap-4 bg-blue-txt">
        <Button variant="link">
          Conoce más link <ArrowRight className="ml-4 text-sm" />
        </Button>
        <Button variant="default">
          Conoce más default <ArrowRight className="ml-4 text-sm" />
        </Button>
        <Button variant="destructive">
          Conoce más destructive <ArrowRight className="ml-4 text-sm" />
        </Button>
        <Button variant="outline">
          Conoce más outline
          <ArrowRight className="ml-4 text-sm" />
        </Button>
        <Button variant="secondary">
          Conoce más secondary <ArrowRight className="ml-4 text-sm" />
        </Button>
        <Button variant="ghost">
          Conoce más ghost <ArrowRight className="ml-4 text-sm" />
        </Button>
      </div>
    </main>
  );
}

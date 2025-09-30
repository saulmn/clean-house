import { Button } from "@/components/ui";

export default function GalleryRoute() {
  return (
    <div>
      <h1>Buttons</h1>
      <div>
        <Button variant="default" className="mr-2">Default</Button>
        <Button variant="destructive" className="mr-2">
          Destructive
        </Button>
        <Button variant="outline" className="mr-2">
          Outline
        </Button>
        <Button variant="secondary" className="mr-2">
          Secondary
        </Button>
        <Button variant="ghost" className="mr-2">
          Ghost
        </Button>
        <Button variant="link" className="mr-2">
          Link
        </Button>
      </div>
    </div>
  );
}
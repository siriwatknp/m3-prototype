import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/ui/card";
import Button from "@/components/Button3/Button3";
import { ExternalLink } from "lucide-react";

// Define the structure for our component data
type ComponentVersion = {
  version: string;
  route: string;
};

type ComponentItem = {
  name: string;
  description: string;
  versions: ComponentVersion[];
};

// Our list of components
const components: ComponentItem[] = [
  {
    name: "Button",
    description: "A clickable button element",
    versions: [
      { version: "hard-coded color", route: "/material-ui/react-button" },
      {
        version: "dynamic colors + class",
        route: "/material-ui/react-button2",
      },
      {
        version: "dynamic colors + inline style",
        route: "/material-ui/react-button3",
      },
      {
        version: "dynamic colors + inline style + public vars",
        route: "/material-ui/react-button4",
      },
    ],
  },
];

export default function ComponentList() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Component List</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Card key={component.name}>
            <CardHeader>
              <CardTitle>{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center bg-slate-100 rounded-md -my-2">
                <Button>Button</Button>
              </div>
            </CardContent>
            <CardContent>
              <h3 className="font-semibold mb-2">Versions:</h3>
              <ul className="list-none pl-0 flex flex-col gap-2">
                {component.versions.map((version) => (
                  <li key={version.version}>
                    <Link
                      href={version.route}
                      className="text-primary hover:text-primary-dark flex items-center gap-2 group transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 transition-colors" />
                      <span className="hover:underline">{version.version}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

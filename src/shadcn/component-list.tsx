"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/ui/card";
import { Badge } from "@/shadcn/ui/badge";

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
      { version: "v1", route: "/components/button/v1" },
      { version: "v2", route: "/components/button/v2" },
      { version: "v3", route: "/components/button/v3" },
    ],
  },
  {
    name: "Card",
    description: "A container for content",
    versions: [
      { version: "v1", route: "/components/card/v1" },
      { version: "v2", route: "/components/card/v2" },
    ],
  },
  {
    name: "Dropdown",
    description: "A toggleable menu",
    versions: [
      { version: "v1", route: "/components/dropdown/v1" },
      { version: "v2", route: "/components/dropdown/v2" },
      { version: "v3", route: "/components/dropdown/v3" },
      { version: "v4", route: "/components/dropdown/v4" },
    ],
  },
];

export function ComponentListComponent() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Component List</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Card key={component.name}>
            <CardHeader>
              <CardTitle>{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {component.versions.map((version) => (
                  <Link key={version.version} href={version.route}>
                    <Badge
                      variant="secondary"
                      className="cursor-pointer hover:bg-secondary-foreground hover:text-secondary transition-colors"
                    >
                      {version.version}
                    </Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

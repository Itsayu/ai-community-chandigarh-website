import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { resources } from "@/lib/data";
import { ArrowUpRight, Book, Database, Wrench, GraduationCap } from "lucide-react";

const categoryIcons = {
  'Research Paper': <Book className="h-5 w-5" />,
  'Dataset': <Database className="h-5 w-5" />,
  'Tool': <Wrench className="h-5 w-5" />,
  'Tutorial': <GraduationCap className="h-5 w-5" />,
}

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight font-headline">AI Resource Directory</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">A curated list of AI-related resources for the Chandigarh community.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {resources.map((resource) => (
            <Card key={resource.id} className="flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        {categoryIcons[resource.category]}
                        <span>{resource.category}</span>
                    </div>
                </div>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map(tag => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="ghost" className="w-full justify-start text-primary hover:text-primary">
                  <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                    Access Resource <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { news } from "@/lib/data";
import { ArrowRight, UserCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function NewsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight font-headline">News & Articles</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">Stay updated with AI developments, stories, and achievements from Chandigarh.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => {
            const image = PlaceHolderImages.find(p => p.id === article.imageId);
            return (
            <Card key={article.id} className="flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-card">
               {image && (
                <div className="relative h-56 w-full">
                  <Image
                    src={image.imageUrl}
                    alt={article.title}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <p className="text-sm text-muted-foreground">{article.date}</p>
                <CardTitle>{article.title}</CardTitle>
                 <div className="flex items-center text-sm text-muted-foreground pt-1">
                    <UserCircle className="h-4 w-4 mr-2" />
                    <span>By {article.author}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{article.excerpt}</p>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0 text-primary">
                  <Link href="#">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )})}
        </div>
      </div>
    </div>
  );
}

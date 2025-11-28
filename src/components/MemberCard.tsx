"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Member } from "@/lib/types";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Plus } from "lucide-react";

interface MemberCardProps {
  member: Member;
  image?: ImagePlaceholder;
  onOpenModal: () => void;
}

export function MemberCard({ member, image, onOpenModal }: MemberCardProps) {
  return (
    <Card 
        onClick={onOpenModal}
        className="group relative overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative aspect-[4/3] w-full">
        <Avatar className="w-full h-full rounded-none">
          {image && (
              <AvatarImage 
                  src={image.imageUrl} 
                  alt={member.name}
                  data-ai-hint={image.imageHint}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
          )}
          <AvatarFallback className="rounded-none">{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300" />
        <div className="absolute top-2 right-2 p-1.5 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Plus className="h-4 w-4 text-foreground" />
        </div>
      </div>
      <CardContent className="p-2 bg-card">
        <h3 className="text-sm font-bold truncate">{member.name}</h3>
        <p className="text-xs text-primary">{member.role}</p>
      </CardContent>
    </Card>
  );
}

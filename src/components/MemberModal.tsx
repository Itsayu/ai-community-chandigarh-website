"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import type { Member } from "@/lib/types";
import Image from "next/image";

interface MemberModalProps {
  member: Member;
  onClose: () => void;
}

export function MemberModal({ member, onClose }: MemberModalProps) {
  // Generate a consistent color based on the member's name
  const getColorFromName = (name: string) => {
    const colors = [
      'from-blue-500 to-purple-600',
      'from-green-500 to-teal-600',
      'from-orange-500 to-red-600',
      'from-pink-500 to-rose-600',
      'from-indigo-500 to-blue-600',
      'from-yellow-500 to-orange-600',
      'from-cyan-500 to-blue-600',
      'from-violet-500 to-purple-600',
    ];
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  };

  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="w-[95vw] max-w-[425px] sm:max-w-[500px] md:max-w-lg lg:max-w-2xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="h-32 sm:h-40 w-full bg-muted relative">
            {member.coverPhoto ? (
              <Image 
                src={typeof member.coverPhoto === 'string' ? member.coverPhoto : member.coverPhoto.src} 
                alt={`${member.name} cover`} 
                className="h-full w-full object-cover" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className={`h-full w-full bg-gradient-to-br ${getColorFromName(member.name)} flex items-center justify-center`}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/30 px-4 text-center">
                  {member.name}
                </h2>
              </div>
            )}
          </div>
          <div className="absolute -bottom-10 sm:-bottom-12 left-4 sm:left-6">
             <Avatar className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 border-4 border-background bg-background shadow-md">
              {member.photo && <AvatarImage src={typeof member.photo === 'string' ? member.photo : member.photo.src} alt={member.name} />}
              <AvatarFallback className="text-2xl sm:text-3xl md:text-4xl">{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-12 sm:pt-14 md:pt-16">
          <h2 className="text-xl sm:text-2xl font-bold">{member.name}</h2>
          <p className="text-primary font-semibold text-sm sm:text-base">{member.role}</p>
          
          <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base">{member.bio}</p>

          <div className="mt-4 sm:mt-6">
            <h3 className="text-base sm:text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {member.skills?.map(skill => (
                <Badge key={skill} variant="secondary" className="text-xs sm:text-sm">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
            {member.github && (
              <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                <Link href={member.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            )}
            {member.linkedin && (
              <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            )}
            {member.twitter && (
              <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                <Link href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Link>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
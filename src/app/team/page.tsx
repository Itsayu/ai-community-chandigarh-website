"use client";

import { useState } from "react";
import Image from "next/image";
import { MemberModal } from "@/components/MemberModal";
import { members } from "@/lib/data"; // Import members from your data file
import type { Member } from "@/lib/types";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <>
      <div className="bg-background min-h-screen py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Meet Our Organizers
            </h1>
            {/* Google underline */}
            <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />
            <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
              The team behind the AI community Chandigarh.
            </p>

          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {members.map((member) => (
              <div key={member.id} className="w-full sm:w-80 md:w-72 lg:w-80">
                <MemberCard
                  member={member}
                  onOpenModal={() => setSelectedMember(member)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </>
  );
}

function MemberCard({
  member,
  onOpenModal,
}: {
  member: Member;
  onOpenModal: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpenModal}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpenModal();
      }}
      className="rounded-xl overflow-hidden cursor-pointer transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
    >
      <div className="relative w-full aspect-[4/3] bg-gray-100">
        {member.photo && (
          <Image
            src={typeof member.photo === 'string' ? member.photo : member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
            className="block"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/65 to-transparent" />

        {/* Text */}
        <div className="absolute left-4 right-4 bottom-3">
          <h3 className="text-white text-lg md:text-xl font-semibold drop-shadow-sm">
            {member.name}
          </h3>
          <p className="text-sky-200 text-sm mt-1 drop-shadow-sm">
            {member.role ?? "Organizer"}
          </p>
        </div>
      </div>

      <div className="bg-white border border-t-0 rounded-b-xl px-4"></div>
    </div>
  );
}
"use client";

import { Star } from "lucide-react";

interface Review {
  author_name: string;
  text: string;
  rating: number;
}

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const { author_name, text, rating } = review;

  return (
    <div className="flex flex-col items-start justify-start w-[300px] h-[320px] bg-slate-100 rounded-xl p-7 gap-[25px]">
      <p className="text-base font-normal">{text}</p>
      <div className="flex flex-row items-start justify-start gap-[3px]">
        <Star color="#FFD700" fill="#FFD700" />
        <Star color="#FFD700" fill="#FFD700" />
        <Star color="#FFD700" fill="#FFD700" />
        <Star color="#FFD700" fill="#FFD700" />
        <Star color="#FFD700" fill="#FFD700" />
      </div>
      <p className="text-base font-medium">{author_name}</p>
    </div>
  );
}

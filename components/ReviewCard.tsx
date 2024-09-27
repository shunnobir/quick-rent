import { ReviewType } from "@/types";
import { Quote, Star } from "lucide-react";
import React from "react";

const ReviewCard = (props: { review: ReviewType }) => {
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-background p-5">
      <Quote size={24} className="text-indigo-600" />
      <span className="italic leading-6 text-slate-700">
        {'"'}
        {props.review.review}
        {'"'}
      </span>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2.5">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
            {props.review["reviewer-name"][0].toUpperCase()}
          </span>
          <div className="flex flex-col">
            <span className="text-slate-600">
              {props.review["reviewer-name"]}
            </span>
            <span className="text-sm text-slate-400">
              @{props.review["reviewer-name"].toLowerCase().split(" ").join("")}
            </span>
          </div>
        </div>
        <span className="inline-flex gap-1">
          <Star size={20} strokeWidth={0} className="fill-indigo-600" />{" "}
          {props.review.stars}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;

"use client";
import clsx from "clsx";
import { useState } from "react";
import { QuestionTitle } from "../QuestionTitle/QuestionTitle";

type StarRatingProps = {
  initialRating?: number;
  className?: string;
  title: string;
  subtitle?: string;
};

export const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  className,
  title,
  subtitle,
}) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <div>
      <QuestionTitle title={title} subtitle={subtitle} />
      <div
        className={clsx("flex items-center w-[364px] justify-between", className)}
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            onClick={() => handleStarClick(index)}
            className={`cursor-pointer ${
              index <= rating ? "text-yellow-500" : "text-gray-300"
            } text-[40px]`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

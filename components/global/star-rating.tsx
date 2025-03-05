import { calcAverageRating, cn } from "@/lib/utils";
import { IoStar } from "react-icons/io5";

interface StarRatingProps {
  ratings: number[];
}

export const StarRating = ({ ratings }: StarRatingProps) => {
  const avrgRating = calcAverageRating(ratings);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <IoStar
            key={index}
            className={cn(
              "text-muted-foreground size-4 md:size-5",
              index < Math.floor(avrgRating) && "text-[#FFC633]",
            )}
          />
        ))}
      </div>
      <p className="text-sm">
        <span>{avrgRating}</span>
        <span className="text-muted-foreground">/5</span>
      </p>
    </div>
  );
};

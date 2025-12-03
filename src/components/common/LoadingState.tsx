import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type LoadingStateProps = {
  duration?: number; // time to auto-complete (ms)
  onComplete?: () => void;
  message?: string; // custom loading text
};

const LoadingState: React.FC<LoadingStateProps> = ({
  duration = 2000,
  onComplete,
  message = "Fetching Data",
}) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <div className="flex pt-35 justify-center  bg-background ">
      <div className="">
        {/* Message */}
        <div className="mb-4 px-4">
            <p className="text-sm text-gray-500 text-center uppercase tracking-wider text-muted-foreground font-medium font-['Inter'] leading-6">
            {message}
            </p>
        </div>

        {/* Skeleton lines */}
        <div className="space-y-2 ">
          <Skeleton className="h-4 w-100   bg-gray-200 animate-shimmer"  />
          <Skeleton className="h-4 w-80   bg-gray-200 animate-shimmer" />
          <Skeleton className="h-4 w-60   bg-gray-200 animate-shimmer" />
          <Skeleton className="h-4 w-100   bg-gray-200 animate-shimmer" />
          <Skeleton className="h-4 w-80   bg-gray-200 animate-shimmer" />
          <Skeleton className="h-4 w-60   bg-gray-200 animate-shimmer" />
        </div>
      </div>
    </div>
  );
};

export default LoadingState;

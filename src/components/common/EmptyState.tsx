import React from "react";

interface EmptyStateProps {
  missingField?: string; 
  message?: string; 
}

const EmptyState: React.FC<EmptyStateProps> = ({ missingField, message }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-30 font-medium font-['Inter'] leading-4">
      <div className="flex items-center justify-center mb-4">
        <svg
          width="140"
          height="92"
          viewBox="0 0 140 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="7" y="16" width="126" height="60" rx="6" fill="#F3F4F6" />
          <rect x="20" y="30" width="100" height="6" rx="3" fill="#E5E7EB" />
          <rect x="20" y="44" width="72" height="6" rx="3" fill="#E5E7EB" />
          <rect x="20" y="58" width="48" height="6" rx="3" fill="#E5E7EB" />
        </svg>
      </div>

      <h3 className="text-lg font-semibold mb-2">
        {missingField
          ? `${missingField.charAt(0).toUpperCase() + missingField.slice(1)} missing`
          : "No data"}
      </h3>

      <p className="text-sm text-muted-foreground mb-4">
        {message
          ? message
          : missingField
          ? `Please select a valid ${missingField} to view the report.`
          : "We couldn't find any results for your search."}
      </p>
    </div>
  );
};

export default EmptyState;

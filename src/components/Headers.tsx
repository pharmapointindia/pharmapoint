import React from "react";
import pharmapointlogotext from "../assets/pharmapoint_logo_text.png";

type HeadersProps = {
    logoSrc?: string;
    logoAlt?: string;
    className?: string;
};

const Headers: React.FC<HeadersProps> = ({
    logoSrc = pharmapointlogotext,
    logoAlt = "logo",
    className,
}) => {
    return (
         <header className={`flex items-center justify-between p-2  ${className || ""}`}>
      <div className="flex items-center">
        
       <img
            src={logoSrc}
            alt={logoAlt}
            className="w-35 h-25 object-contain block"
          />
      </div>
    </header>
    );
};

export default Headers;

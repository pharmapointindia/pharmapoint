import React from "react";
<<<<<<< HEAD
import pharmapointlogotext from "../assets/pharmapoint_logo_text.png";
=======
import pharmapointlogotext from "../assets/pharmapoint_logo_text.png"; 
>>>>>>> 8e7b042f66a07c126dec7830e336c5ced468bf78

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

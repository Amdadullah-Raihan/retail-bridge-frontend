//DOC: Button.jsx
import {} from "react";
import { cn } from "../../utils/cn";

import Loading from "../svgs/Loading";

const Button = ({
  children,
  className = "",
  variant = "primary",
  loading = false,
  ...restProps
}) => {
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    // Add more variants as needed
  };

  return (
    <button
      className={cn(
        variantClasses[variant],
        className,
        "py-2 px-4 min-w-24 h-11 rounded-md transition-all duration-200 active:scale-95 flex items-center justify-center",
        loading && "animate-pulse cursor-not-allowed active:scale-100"
      )}
      {...restProps}
    >
      {loading ? <Loading className="w-6 h-6" /> : children}
    </button>
  );
};

export default Button;

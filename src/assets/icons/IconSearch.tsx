import { FC } from "react";

interface Icon {
  className?: string;
}

export const IconSearch: FC<Icon> = ({className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        className={className}
        fill="currentColor"
        d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
      />
    </svg>
  );
};
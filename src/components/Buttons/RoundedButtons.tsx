import React from 'react';

interface RoundedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export const RoundedFilledButton: React.FC<RoundedButtonProps> = ({
  text,
  className,
  icon,
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 ${className}`}
      {...props}
    >
      {text}
      {icon && <span className="mr-2">{icon}</span>}
    </button>
  );
};

export const RoundedOutlineButton: React.FC<RoundedButtonProps> = ({
  text,
  className,
  icon,
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full border border-white py-2 px-4 text-center font-medium text-white hover:bg-opacity-10 hover:bg-white ${className}`}
      {...props}
    >
      {text}
      {icon && <span className="mr-2">{icon}</span>}
    </button>
  );
};

export const RoundedOutlineDarckButton: React.FC<RoundedButtonProps> = ({
  text,
  className,
  icon,
  ...props
}) => {
  return (
    <button
      className={` items-start justify-center rounded-full border border-black py-2 px-4 m-1 text-center font-medium text-black hover:text-white hover:bg-primary hover:transition-shadow ${className}`}
      {...props}
    >
      {text}
      {icon && <span className="mr-2">{icon}</span>}
    </button>
  );
};

export const IconRoundedOutlineButton: React.FC<RoundedButtonProps> = ({
  className,
  isActive,
  icon,
  ...props
}) => {
  return (
    <button
      className={`items-center justify-center rounded-full   text-center font-medium text-black hover:text-primary hover:bg-opacity-35  ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
    </button>
  );
};

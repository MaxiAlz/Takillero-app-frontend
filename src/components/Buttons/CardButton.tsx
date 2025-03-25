import { ButtonHTMLAttributes, ReactNode } from 'react';

interface CardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  title: string;
  subtitle?: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
const CardButton: React.FC<CardButtonProps> = ({
  children,
  title,
  subtitle,
  disabled,
  className,
  type,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded-md  items-center flex flex-col justify-center py-6 px-7.5 shadow-default hover:opacity-90 ${disabled && 'bg-slate-400 cursor-not-allowed'} ${className}`}
      {...props}
    >
      <div className="flex h-11.5 w-11.5 items-center justify-center  text-white">
        {children}
      </div>
      <div className="mt-4 flex items-end justify-center">
        <div>
          <h4 className="text-title-md font-bold text-white">{title}</h4>
          <span className="text-sm font-medium text-whiten">{subtitle}</span>
        </div>
      </div>
    </button>
  );
};

export default CardButton;

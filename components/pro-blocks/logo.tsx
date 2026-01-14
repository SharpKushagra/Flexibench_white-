interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className || ""}`}>
      <img
        src="/flexibench-logo-optimized.svg"
        alt="FlexiBench Logo"
        className="h-14 w-auto object-contain"
        decoding="async"
      />
    </div>
  );
};

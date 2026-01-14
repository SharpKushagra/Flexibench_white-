import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ width = 350, height = 120, className }) => {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <Image
        src="/flexibench-logo.svg"
        alt="FlexiBench Logo"
        width={width}
        height={height}
        className="h-24 w-auto object-contain"
        priority
      />
    </div>
  );
};

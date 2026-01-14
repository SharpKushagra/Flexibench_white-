import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ width = 240, height = 80, className }) => {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <Image
        src="/flexibench-logo.svg"
        alt="FlexiBench Logo"
        width={width}
        height={height}
        className="h-16 w-auto object-contain"
        priority
      />
    </div>
  );
};

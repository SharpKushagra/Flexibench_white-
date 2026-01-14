import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ width = 160, height = 50, className }) => {
  return (
    <div className={`flex items-center h-full ${className || ""}`}>
      <Image
        src="/flexibench-logo.svg"
        alt="FlexiBench Logo"
        width={width}
        height={height}
        className="object-contain h-full w-auto"
        priority
      />
    </div>
  );
};

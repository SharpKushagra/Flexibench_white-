import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ width = 280, height = 70, className }) => {
  return (
    <div className={`flex items-center h-full ${className || ""}`}>
      <Image
        src="/flexibench-logo.png"
        alt="FlexiBench Logo"
        width={width}
        height={height}
        className="object-contain max-h-12 w-auto"
        priority
      />
    </div>
  );
};

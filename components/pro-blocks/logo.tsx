import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ width = 200, height = 50, className }) => {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <Image
        src="/flexibench-logo.png"
        alt="FlexiBench Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
};

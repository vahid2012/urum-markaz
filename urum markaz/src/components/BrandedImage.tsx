interface Props {
  src: string;
  alt: string;
  className?: string;
  watermark?: boolean;
}

export default function BrandedImage({ src, alt, className = '', watermark = true }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      {watermark && (
        <span className="absolute bottom-2 left-2 bg-navy-600/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded backdrop-blur-sm pointer-events-none z-10 tracking-wide">
          اروم مرکز | Urummarkaz.ir
        </span>
      )}
    </div>
  );
}

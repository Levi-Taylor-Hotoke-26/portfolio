interface VillagerProps {
  src: string;
  className: string;
}

export default function DancingVillager({ src, className }: VillagerProps) {

  return (
    <div>
      <img
        src={src}
        className={className}
      />
    </div>
  );
}
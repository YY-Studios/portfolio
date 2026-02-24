interface SkillBadgeProps {
  size?: "sm" | "md";
  skill: string;
  isActive: boolean;
}

const SkillBadge = ({ size = "md", skill, isActive }: SkillBadgeProps) => {
  return (
    <div
      className={`
      relative group/skill flex flex-col items-center transition-all duration-500
      ${
        isActive
          ? "opacity-100 scale-100 grayscale-0"
          : "opacity-20 scale-90 grayscale"
      }
      ${
        size === "sm"
          ? "w-10 h-10 md:w-12 md:h-12"
          : "w-14 h-14 md:w-16 md:h-16"
      }
    `}
    >
      <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
        <img
          src={`https://skillicons.dev/icons?i=${skill}`}
          alt={skill}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute -top-1 -translate-y-full left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white rounded text-sm font-medium invisible z-10 group-hover/skill:visible shadow-lg capitalize">
        {skill}
      </div>
    </div>
  );
};

export default SkillBadge;

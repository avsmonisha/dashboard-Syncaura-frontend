const TrustBar = () => {
  return (
    <section className="relative w-full py-16 flex flex-col items-center bg-white dark:bg-[#000000]">
      {/* Title */}
      <p className="text-black dark:text-white text-[22px] mb-12 whitespace-nowrap">
        Trusted by top students all over the world
      </p>

      {/* Center container for 8 squares */}
      <div className="flex gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-lg shadow-lg bg-[#D9D9D9] dark:bg-gradient-to-tr dark:from-[#2E2F2F] dark:to-[#1F2125] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),_-4px_-4px_10px_rgba(255,255,255,0.05)] shadow-[4px_4px_10px_rgba(0,0,0,0.2),_-4px_-4px_10px_rgba(255,255,255,0.6)]"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
const AuthImagePattern = ({ title, subtitle }) => {
  const colors = ["bg-primary/20", "bg-secondary/20", "bg-accent/20"];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        {/* Animated grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`
                aspect-square rounded-2xl shadow-lg transform transition-all duration-500
                ${colors[i % colors.length]}
                animate-pulse
              `}
              style={{
                animationDelay: `${i * 150}ms`,
                transform: `rotate(${(i % 2 ? 3 : -3)}deg)`,
              }}
            />
          ))}
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold mb-4 text-primary drop-shadow-md">{title}</h2>
        {/* Subtitle */}
        <p className="text-base-content/70 text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import FloatingMenu from "./FloatingMenu";

// Generate shooting stars
const generateShootingStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 10 + 5; // 1-4px
    const delay = Math.random() * 5; // 0-5s delay
    const startX = Math.random() * 100; // Random start position
    const duration = Math.random() * 2 + 1; // 1-3s duration

    stars.push({
      id: i,
      size,
      delay,
      startX,
      duration,
      opacity: Math.random() * 1 + 0.8,
    });
  }
  return stars;
};

function Layout({ children }: { children: React.ReactNode }) {
  const [shootingStars, setShootingStars] = useState(() => generateShootingStars(10));

  useEffect(() => {
    const interval = setInterval(() => {
      setShootingStars(generateShootingStars(10));
    }, 8000); // Regenerate shooting stars every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden relative">
      {/* Shooting Stars Background */}
      <div className="absolute inset-0">
        {shootingStars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-black dark:bg-white rounded-full shooting-star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: "-10px",
              left: `${star.startX}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(0, 0, 0, 0.8), 0 0 ${star.size * 4}px ${star.size * 2}px rgba(0, 0, 0, 0.4)`,
            }}
          />
        ))}
      </div>

      {/* Nebula effect */}

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl my-8 lg:px-0 px-5">{children}</div>
      </div>
      <div className="lg:hidden">
        <FloatingMenu />
      </div>
    </div>
  );
}

export default Layout;

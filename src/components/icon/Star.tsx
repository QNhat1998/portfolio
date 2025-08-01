// src/components/TwinkleStar.tsx
export default function TwinkleStar({
  top,
  left,
  size = 'text-sm',
  delay = '0s',
}: {
  top: string
  left: string
  size?: string
  delay?: string
}) {
  return (
    <div
      className={`absolute ${size} text-white animate-twinkle`}
      style={{
        top,
        left,
        animationDelay: delay,
      }}
    >
      ✦
    </div>
  )
}

export function GradientRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-1 w-[40%] rounded-sm bg-gradient-to-r from-[#1141FF] via-[#1141FF]/20 to-transparent ${className}`}
      aria-hidden="true"
    />
  )
}

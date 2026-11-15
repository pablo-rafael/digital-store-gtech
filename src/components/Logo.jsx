export default function Logo({ white = false, width = 253, height = 44 }) {
  const main = white ? '#FFFFFF' : '#C92071'
  const letter = white ? '#1F1F1F' : '#FFFFFF'
  return (
    <svg width={width} height={height} viewBox="0 0 253 44" role="img" aria-label="Digital Store">
      <circle cx="22" cy="22" r="20" fill={main} />
      <text x="22" y="29" textAnchor="middle" fontSize="20" fontWeight="700" fill={letter}>D</text>
      <text x="52" y="30" fontSize="26" fontWeight="700" fill={main}>Digital Store</text>
    </svg>
  )
}

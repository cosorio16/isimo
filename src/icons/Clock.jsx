function Clock({ sizes }) {
  return (
    <svg width={sizes} height={sizes} viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
        <path d="M12 7v5l3 3" />
      </g>
    </svg>
  );
}

export default Clock;

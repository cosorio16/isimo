function Lamp({ sizes }) {
  return (
    <svg width={sizes} height={sizes} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 20h6m-3 0v-8m-7 0h14l-4-8H9z"
      />
    </svg>
  );
}

export default Lamp;

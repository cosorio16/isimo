
function Device({sizes}) {
  return (
    <svg
      width={sizes}
      height={sizes}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2 7h20v14h-6l-4-4l-4 4H2zm4-5l5 5h2l5-5"
      />
    </svg>
  );
}

export default Device;

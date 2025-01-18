function Temperature({ sizes }) {
  return (
    <svg width={sizes} height={sizes} viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        color="currentColor"
      >
        <path d="M12 22a5 5 0 0 0 3-9V5c0-.932 0-1.398-.152-1.766a2 2 0 0 0-1.082-1.082C13.4 2 12.932 2 12 2s-1.399 0-1.766.152a2 2 0 0 0-1.082 1.082C9 3.602 9 4.068 9 5v8a5 5 0 0 0 3 9" />
        <path d="M12 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8" />
      </g>
    </svg>
  );
}

export default Temperature;

function Chart({ sizes }) {
  return (
    <svg width={sizes} height={sizes} viewBox="0 0 24 24">
      <g fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 21a9 9 0 0 1-9-9c0-4.248 2.943-7.854 6.9-8.808c.58-.14 1.1.329 1.1.925V11a2 2 0 0 0 2 2h6.883c.596 0 1.064.52.925 1.1c-.954 3.957-4.56 6.9-8.808 6.9zm3-17v5h5c-.333-1.667-1.8-5-5-5z"
          fill="currentColor"
        />
        <path
          d="M9.9 3.192l.235.973l-.235-.973zM20.808 14.1l.972.234l-.972-.234zM15 9h-1a1 1 0 0 0 1 1V9zm0-5V3a1 1 0 0 0-1 1h1zm5 5v1a1 1 0 0 0 .98-1.196L20 9zM2 12c0 5.523 4.477 10 10 10v-2a8 8 0 0 1-8-8H2zm7.666-9.78C5.264 3.28 2 7.285 2 12h2c0-3.78 2.62-6.989 6.135-7.835L9.666 2.22zM12 4.117c0-1.15-1.037-2.21-2.334-1.897l.469 1.945a.146.146 0 0 1-.12-.028C10 4.123 10 4.112 10 4.117h2zM12 11V4.117h-2V11h2zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2zm6.883 0H13v2h6.883v-2zm1.897 2.334c.312-1.296-.748-2.334-1.897-2.334v2c.005 0-.006.001-.02-.016a.145.145 0 0 1-.027-.119l1.944.469zM12 22c4.715 0 8.72-3.264 9.78-7.666l-1.945-.469C18.99 17.38 15.78 20 12 20v2zm4-13V4h-2v5h2zm4-1h-5v2h5V8zm-5-3c1.203 0 2.105.611 2.785 1.488c.694.895 1.091 1.993 1.234 2.708l1.962-.392c-.19-.952-.694-2.354-1.616-3.542C18.429 4.055 16.997 3 15 3v2z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default Chart;
const paths = {
  bed: (
    <>
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 14h18M6 9V6h5a3 3 0 0 1 3 3M3 18v2m18-2v2" />
    </>
  ),
  bath: (
    <>
      <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3ZM6 12V6a2 2 0 0 1 4 0v1" />
      <path d="M8 19v2m8-2v2" />
    </>
  ),
  wifi: (
    <>
      <path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0m-11 3.5a5 5 0 0 1 8 0M12 19h.01" />
    </>
  ),
  climate: (
    <>
      <path d="M12 2v20m7-16-14 12m14 0L5 6m7-4 2 3-2 3-2-3 2-3Zm0 12 2 3-2 3-2-3 2-3Zm10-3-3 2-3-2 3-2 3 2ZM8 12l-3 2-3-2 3-2 3 2Z" />
    </>
  ),
  cup: (
    <>
      <path d="M5 8h12v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8Zm12 2h2a2 2 0 1 1 0 4h-2M8 4c0 1 1 1 1 2m4-2c0 1 1 1 1 2" />
    </>
  ),
  sofa: (
    <>
      <path d="M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4m-14 0a2 2 0 0 0-2 2v4h18v-4a2 2 0 0 0-2-2H5Zm1 6v2m12-2v2" />
    </>
  ),
};

export default function AmenityIcon({ name }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      {paths[name]}
    </svg>
  );
}

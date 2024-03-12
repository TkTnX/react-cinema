import ContentLoader from "react-content-loader";
export const Skeleton = () => {
  return (
    <ContentLoader
      speed={4}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#c0bfbf"
      foregroundColor="#ecebeb"
    >
      <rect x="180" y="297" rx="0" ry="0" width="3" height="1" />
      <rect x="0" y="0" rx="0" ry="0" width="340" height="423" />
      <rect x="89" y="433" rx="0" ry="0" width="91" height="28" />
      <rect x="2" y="469" rx="0" ry="0" width="92" height="57" />
      <rect x="174" y="468" rx="0" ry="0" width="107" height="36" />
    </ContentLoader>
  );
};

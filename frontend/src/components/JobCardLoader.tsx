import ContentLoader from "react-content-loader";

function JobCardLoaderItem(props: any) {
  return (
    <ContentLoader
      speed={2}
      width={350}
      height={200}
      viewBox="0 0 400 200"
      backgroundColor="#b5a6a6"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="200" />
    </ContentLoader>
  );
}

export default function JobCardLoader() {
  const fourArray = new Array(6).fill(0);
  return (
    <div className="d-flex gap-4 flex-wrap mx-auto justify-content-center">
      {fourArray.map((_, index) => (
        <JobCardLoaderItem key={index} />
      ))}
    </div>
  );
}

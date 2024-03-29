import Layout from "layouts";
import Filter from "components/Filter";
import JobGrid from "components/JobGrid";
import Search from "components/Search";
import useScroll from "hooks/useScroll";
import useSearch from "hooks/useSearch";

export default function JobBoard() {
  const { scroll } = useScroll();
  const { status, result } = useSearch();
  return (
    <Layout title="Job board" className="jobboard">
      <section className="light-bg pb-5">
        <Search />
        <div className="container mt-2 d-flex position-relative align-items-start justify-content-between">
          <Filter scroll={scroll} />
          <JobGrid scroll={scroll} status={status} jobs={result} />
        </div>
      </section>
    </Layout>
  );
}

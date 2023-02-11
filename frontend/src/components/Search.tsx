import { useState } from "react";
import Button from "components/Button";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { clearSearch, searchJobs } from "redux/slices/searchSlice";

export default function Search() {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.searchSlice);
  const [searchJob, setSearchJob] = useState({
    title: "",
    location: "",
  });

  const searchQuery = search.title || search.location;

  const searchText = searchQuery ? "Clear" : "Search";
  const searchStyle = searchQuery
    ? "bg-deep-blue text-white"
    : "hover-bg-light-blue";

  function handleInput(e: any) {
    setSearchJob({
      ...searchJob,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (searchQuery) {
      setSearchJob({ title: "", location: "" });
      dispatch(clearSearch());
    } else {
      dispatch(searchJobs(searchJob));
    }
  }

  return (
    <div className="container search mb-4 d-flex w-full py-4 justify-content-between align-items-center">
      <Button
        className="bg-deep-blue border-0 px-4  text-white py-2 rounded-pill hover-bg-primary"
        text="Post a Job"
      />
      <form
        className="search justify-content-between gap-4 col-10 d-flex align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="input col-7 position-relative">
          <img
            src="/assets/search.svg"
            alt="search"
            className="position-absolute mt-2 pt-1 ms-3"
          />
          <input
            className="rounded border-blue w-100 py-2 ps-5"
            placeholder="Search by company, role"
            name="title"
            value={searchJob.title}
            onChange={handleInput}
          />
        </div>
        <div className="input col-3 position-relative">
          <img
            src="/assets/location.svg"
            alt="location"
            className="position-absolute mt-2 pt-1 ms-3"
          />
          <input
            className="rounded w-100 border-blue py-2 ps-5"
            placeholder="City, state or zipcode"
            name="location"
            value={searchJob.location}
            onChange={handleInput}
          />
        </div>
        <Button
          className={`py-2 text-deep-blue px-5 border-blue rounded-pill ${searchStyle}`}
          type="submit"
          text={searchText}
        />
      </form>
    </div>
  );
}

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
    <div className="search mb-4 d-flex w-full justify-content-between align-items-center">
      <Button
        className="bg-deep-blue border-0 px-4 text-white py-2 rounded-pill hover-bg-primary"
        text="Post a Job"
      />
      <form
        className="search justify-content-between col-10 d-flex align-items-center my-4"
        onSubmit={handleSubmit}
      >
        <div className="input col-8 position-relative">
          <img
            src="/assets/search.svg"
            alt="search"
            className="position-absolute w-4"
          />
          <input
            className="rounded border-blue w-100 py-2 pl-16"
            placeholder="Search by company, role"
            name="title"
            value={searchJob.title}
            onChange={handleInput}
          />
        </div>
        <div className="input col-2 position-relative">
          <img
            src="/assets/location.svg"
            alt="location"
            className="position-absolute top-3.5 w-4 left-8"
          />
          <input
            className="rounded w-full border-blue py-2 pl-16"
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

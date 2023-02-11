import { useQuery } from "@tanstack/react-query";

import Logo from "components/Logo";
import SpinnerRipple from "components/SpinnerRipple";
import { getEventBriteEventList } from "utils/getEvents";
import { formatDate } from "utils/getTimeDifference";
import EventBriteListing from "./EventBriteListing";

export default function UpcomingEvents() {
  const { data, status } = useQuery(["list-event"], getEventBriteEventList);

  const eventArray = status === "success" ? data.data.events.reverse() : [];

  return (
    <div className="my-5 upcoming-events text-deep-blue mx-auto flex flex-col justify-center  container">
      <h2>Upcoming Events</h2>
      <p>Earn badges at upcoming events!</p>
      <div className="span w-1/6 my-4">
        <Logo noLink />
      </div>
      {status === "error" ? (
        <p>Unable to fetch events from Eventbrite</p>
      ) : status === "loading" ? (
        <SpinnerRipple centerRipple />
      ) : (
        <ul className="list-unstyled d-flex w-100 gap-4">
          {eventArray.map((briteEvent: any) => (
            <EventBriteListing key={briteEvent.id} briteEvent={briteEvent} />
          ))}
        </ul>
      )}
    </div>
  );
}

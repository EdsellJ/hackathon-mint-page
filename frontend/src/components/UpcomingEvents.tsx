import { useQuery } from "@tanstack/react-query";

import Logo from "components/Logo";
import SpinnerRipple from "components/SpinnerRipple";
import { getEventBriteEventList } from "utils/getEvents";
import { formatDate } from "utils/getTimeDifference";

export default function UpcomingEvents() {
  const { data, status } = useQuery(["list-event"], getEventBriteEventList);

  const eventArray = status === "success" ? data.data.events.reverse() : [];

  return (
    <div className="my-8 upcoming-events px-16 text-primary mx-auto flex flex-col justify-center  container">
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
        <ul className="">
          {eventArray.map((briteEvent: any) => {
            const eventStartDate = formatDate(briteEvent.start.utc);
            const eventEndDate = formatDate(briteEvent.end.utc);
            return (
              <li key={briteEvent.id} className="my-6">
                <img
                  src={briteEvent.logo.original.url}
                  height={`${briteEvent.logo.crop_mask.height}px`}
                  width={`${briteEvent.logo.crop_mask.width}px`}
                  alt={briteEvent.name.text}
                  className="my-6"
                />
                <h2 className="font-bold my-4">{briteEvent.name.text}</h2>
                <p>{briteEvent.description.text}</p>
                <div className="bottom-info my-8 flex justify-between">
                  <a
                    href={briteEvent.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-500 underline"
                  >
                    Vist Event ({briteEvent.is_free ? "free" : "paid"})
                  </a>
                  <div className="date flex flex-col">
                    <span>Start : {eventStartDate}</span>
                    <span>End : {eventEndDate}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

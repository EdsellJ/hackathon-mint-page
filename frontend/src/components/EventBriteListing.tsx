import type { briteEventType } from "types";
import { formatDate } from "utils/getTimeDifference";

interface Props {
  briteEvent: briteEventType;
}

export default function EventBriteListing({ briteEvent }: Props) {
  const eventStartDate = formatDate(briteEvent.start.utc);
  const eventEndDate = formatDate(briteEvent.end.utc);
  return (
    <li className="col-6 bg-light-blue text-white rounded-4">
      <img
        src={briteEvent.logo.original.url}
        height={`${briteEvent.logo.crop_mask.height}px`}
        width={`${briteEvent.logo.crop_mask.width}px`}
        alt={briteEvent.name.text}
        className="my-0 w-100 rounded-4"
      />
      <div className="text-content px-4 pb-4">
        <h2 className="fw-bold my-2">{briteEvent.name.text}</h2>
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
      </div>
    </li>
  );
}

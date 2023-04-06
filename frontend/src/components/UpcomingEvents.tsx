import { useQuery } from "@tanstack/react-query";

import Logo from "components/Logo";
import SpinnerRipple from "components/SpinnerRipple";
import { getEventBriteEventList } from "utils/getEvents";
import EventBriteListing from "components/EventBriteListing";
import { sortEventByLatestDate } from "utils/getTimeDifference";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function UpcomingEvents() {
  const { data, status } = useQuery(["list-event"], getEventBriteEventList);

  const eventArray =
    status === "success" ? sortEventByLatestDate(data?.data?.events) : [];

  console.log("data.data", data?.data);
  console.log("eventArray", eventArray);

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
        <div className="loading mx-auto d-flex justify-content-center align-items-center w-full">
          <SpinnerRipple />
        </div>
      ) : (
        <Container className="list-unstyled d-flex w-100 gap-4">
          <Row>
            {eventArray.map((briteEvent: any) => (
              <EventBriteListing key={briteEvent.id} briteEvent={briteEvent} />
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

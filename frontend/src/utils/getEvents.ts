import axios from "axios";

export async function getEventBriteEventList() {
  return await axios.get(
    `https://www.eventbriteapi.com/v3/organizations/${process.env.NEXT_PUBLIC_EVENTBRITE_ORG_ID}/events/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_EVENTBRITE_PERSONAL_AUTH_TOKEN}`,
      },
    }
  );
}

import axios from "axios";

export async function getEventBriteEventList() {
  return await axios.get(
    "https://www.eventbriteapi.com/v3/organizations/892957692073/events/",
    {
      headers: {
        Authorization: "Bearer TTWE2VOCBIDD4O7BU44Y",
      },
    }
  );
}

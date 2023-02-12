import type { briteEventType } from "types";

export function getTimeDifference(endTime: string, startTime: string) {
  const endTimeDate: any = new Date(endTime);
  const startTimeDate: any = new Date(startTime);
  const timeDiff = endTimeDate - startTimeDate;
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return { days, hours, minutes, seconds };
}

export function formatDate(eventDate: string) {
  const formattedEventDate = new Date(eventDate);
  return formattedEventDate.toUTCString();
}

export function getJobPostDate(postedDate: Date) {
  const postedDateInstance: any | Date = new Date(postedDate);
  const currentDate: any | Date = new Date();
  const dateDifferenceMill = currentDate - postedDateInstance;
  const dateDifference = dateDifferenceMill / 1000;
  const day = 24 * 60 * 60;
  const calDayValue = dateDifference / day;
  const dayValue = Math.round(calDayValue);
  const result = dayValue > 1 ? "days" : "day";
  return `${dayValue} ${result} ago`;
}

export function sortEventByLatestDate(event: briteEventType[]) {
  return event.sort((a, b) => {
    const d1: any = new Date(b.start.utc);
    const d2: any = new Date(a.start.utc);
    return d1 - d2;
  });
}

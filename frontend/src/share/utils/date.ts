export function datetimeToDate(datetime: Date): Date {
  if (typeof datetime === "string") datetime = new Date(datetime);
  return new Date(
    datetime.getFullYear() +
    "-" +
    ("0" + (+datetime.getMonth() + 1).toString()).slice(-2) +
    "-" +
    ("0" + datetime.getDate().toString()).slice(-2) +
    "T00:00:00Z"
  );
}

export function datetimeToDateString(datetime: Date): string {
  if (typeof datetime === "string") datetime = new Date(datetime);
  return (
    datetime.getFullYear() +
    "-" +
    ("0" + (+datetime.getMonth() + 1).toString()).slice(-2) +
    "-" +
    ("0" + datetime.getDate().toString()).slice(-2)
  );
}

export function dateInRusView(date: Date): string {
  return (
    ("0" + date.getDate().toString()).slice(-2) +
    "." +
    ("0" + (+date.getMonth() + 1).toString()).slice(-2) +
    "." +
    date.getFullYear()
  );
}

export function convertDate(date: string) {
    const options = {month: "long", day: "numeric", year: "numeric"} as any;
    const date1 = new Date(date);
    return new Intl.DateTimeFormat("en-US", options).format(date1);
}
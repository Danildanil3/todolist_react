function getFormatedDate(date) {
  if (date === null || date === "") {
    return "not specified";
  } else {
    date = new Date(date);
  }
  const values = [
    (date.getDate() < 10 ? "0" : "") + date.getDate(),
    (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1),
    date.getFullYear() - 2000,
  ];
  return values.join(".");
}

export default getFormatedDate;

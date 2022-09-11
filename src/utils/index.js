function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(s) {
  return s.split("").reverse().join("");
}

function defineTaskClasses(done, due_date) {
  let classes = "task ";
  if (done) classes += "done ";
  if (checkToOverdue(due_date)) classes += "overdue ";
  return classes;
}

function checkToOverdue(date) {
  if (date == null || date === "") {
    return false;
  } else {
    return new Date(date) < new Date();
  }
}

function getFormatedDate(date, separator = ".") {
  if (date === null || date === "") {
    return "not specified";
  } else {
    date = new Date(date);
  }
  const values = [
    (date.getDate() < 10 ? "0" : "") + date.getDate(),
    (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1),
    date.getFullYear(),
  ];
  if (separator === "-") return values.reverse().join(separator);
  return values.join(separator);
}

export { Capitalize, reverseString, defineTaskClasses, getFormatedDate };

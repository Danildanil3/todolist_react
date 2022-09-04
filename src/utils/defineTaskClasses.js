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

export default defineTaskClasses;

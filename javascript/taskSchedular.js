var taskSchedulerII = function (tasks, space) {
  let buff = {};
  day = 0;
  let i = 0;
  while (i < tasks.length) {
    if (buff[tasks[i]] !== undefined && day - buff[tasks[i]] <= space) {
        day = space + buff[tasks[i]]+1;
    }
    buff[tasks[i]] = day;
    i++;
    day++;
  }
  return day;
};
console.log(taskSchedulerII([5, 8, 8, 5], 2));

console.log(taskSchedulerII([1, 2, 1, 2, 3, 1], 3));

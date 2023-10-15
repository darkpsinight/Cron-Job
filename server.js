// setInterval(() => {
//   console.log("Running a task every second.");
// }, 1000);

const schedule = require("node-schedule");

// const job = schedule.scheduleJob("* * * * * *", function () {
//   console.log("Running a task every second.");
// });

// running every min 01
// const job = schedule.scheduleJob("01 * * * *", function () {
//   console.log("Running a task every min 01.");
// });

// running at specific date
// const job = schedule.scheduleJob("* * * * * *", function (firstDate) {
//   console.log("This job was supposed to run at " + firstDate + ', but actually ran at ' + new Date());
// });

// running at date: (oct, 15, 2023) and at time: (19:31:00)
// note: January starts from 0 not 1, that's why the number of month October is 9.
// const date = new Date(2023, 9, 15, 19, 31, 0);
// const job = schedule.scheduleJob(date, function () {
//   console.log("Running at the specific date and time given.");
// });

// schedule running a job depends on the rule we set
// the rule is set to run the job recursive each 20 mins
// const rule = new schedule.RecurrenceRule();
// rule.minute = 23;
// const job = schedule.scheduleJob(rule, () => {
//   console.log("Running every at min 23.");
// });

// letral date (hour, minute, dayOfWeek, second, month..etc)
// const job = schedule.scheduleJob({hour: 1, minute: 30, dayOfWeek:0}, () => {
//   console.log("Running schedule.");
// });

// set startTime (after 5 seconds) and endTime (after 10 seconds)
// const startTime = new Date(Date.now() + 5000);
// const endTime = new Date(startTime.getTime() + 5000);
// const job = schedule.scheduleJob(
//   { start: startTime, end: endTime, rule: "*/1 * * * * *" }, // */1 means 'every' (every second)
//   () => {
//     console.log("Running each second after start time till end time.");
//   }
// );

// Shutdown job after 5 seconds
const job = schedule.scheduleJob("* * * * * *", function () {
  console.log("Running a task every second.");
});

setInterval(() => {
  schedule.gracefulShutdown();
  console.log("Graceful Shutdown.");
}, 5000);

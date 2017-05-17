const moment = require("moment-timezone");
const Table = require("cli-table2");
module.exports = (name, sub, options) => {
  const table = new Table({
    head: ["Locale", "Time"],
    colWidths: [25, 25]
  });

  const now = moment();

  const locales = [
    "Asia/Tokyo",
    "America/Los_Angeles",
    "America/New_York",
    "Europe/London"
  ];
  locales.forEach(l => {
    table.push([l, now.tz(l).format("YYYY-MM-DD HH:mm:ss")]);
  });

  console.log(table.toString());
};

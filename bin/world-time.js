#!/usr/bin/env node

const args = require("args");
const timeCommand = require("../commands/time");

args.command("time", "view time", timeCommand, ["t"]);

if (process.argv.length < 3) {
  process.argv.push("time");
}

args.parse(process.argv);

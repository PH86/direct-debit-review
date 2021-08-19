const sql = require("mssql");
const cron = require("node-cron");

cron.schedule("* * * * *", async function () {
  console.log("running every minute");
});

//const getUserData = () => {};

// Connect to the DB

// what information do we need?

// run function to update direct debit

// update server with new direct debits

// scheduler function. CRON?

// the calc for the direct debit review is loosely, (annual cost of supply + any debt on the account) / 12
// I don't know how the annual price is accessed/whether we need to calculate it,
//I'm gonna get a bit more persistent on the "me you and Peter need a catch up" messages heading Aidon's direction today

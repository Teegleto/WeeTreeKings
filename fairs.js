/*
  WeeTreeKings: Christmas fair dates
  ----------------------------------
  This is the only file you need to edit to change the fair dates on the website.

  RIGHT NOW: no fairs are listed, so the website shows "Dates to be confirmed"
  with the Christmas message below.

  TO ADD A FAIR: put a block like this between the [ and ] of window.FAIRS,
  followed by a comma. Add as many as you like, in any order.

    {
      date:  "2026-12-05",              <- YEAR-MONTH-DAY
      name:  "Village Christmas Market",
      where: "The Green, Your Town",
      time:  "10am – 4pm",
      stall: "Stall 7"                  <- or "" if you don't know yet
    },

  Once a fair's date has passed it is greyed out and "snowed in" automatically.
*/

window.FAIRS = [

];

// Shown while there are no fairs listed. Change the wording if you like.
window.FAIRS_MESSAGE = "The reindeer are out scouting the cosiest market spots. Dates will land here soon, so keep your mittens handy.";

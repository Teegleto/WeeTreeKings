/*
  WeeTreeKings: Christmas fair dates
  ----------------------------------
  This is the only file you need to edit to change the fair dates on the website.

  Add one block per fair, between the [ and ] brackets, each followed by a comma.
  Copy an existing block and change the details:

    date   the day of the fair, written YEAR-MONTH-DAY, e.g. "2026-12-05" for 5 December 2026
    name   the name of the fair
    where  the venue and town
    time   opening times
    stall  where to find you (stall number, "by the stage", etc.). You can leave it as ""

  Order doesn't matter: the website sorts them by date.
  Once a fair's date has passed it is greyed out and "snowed in" automatically.
  To show "dates coming soon" instead, delete all the blocks and leave just:  window.FAIRS = [];

  THE DATES BELOW ARE EXAMPLES. Replace them with your real fairs.
*/

window.FAIRS = [
  {
    date:  "2026-10-24",
    name:  "Autumn Craft Market",
    where: "Market Hall, Example Town",
    time:  "10am – 4pm",
    stall: "Stall 3"
  },
  {
    date:  "2026-11-14",
    name:  "Harbourside Winter Market",
    where: "Market Square, Example Town",
    time:  "10am – 4pm",
    stall: "Stall 12"
  },
  {
    date:  "2026-11-28",
    name:  "Makers' Yuletide Fair",
    where: "The Corn Exchange, Example Town",
    time:  "10am – 5pm",
    stall: "Stall 34"
  },
  {
    date:  "2026-12-12",
    name:  "Castle Christmas Market",
    where: "Castle Courtyard, Example Town",
    time:  "10am – 6pm",
    stall: ""
  },
];

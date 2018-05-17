enum months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    Augest,
    September,
    October,
    November,
    December
}
enum days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// html elements
let pTodayDate = document.getElementById("p--today-date");

let today = new Date();
let todayMonth : string = months[today.getMonth()];
let todayDayOfWeek : string = days[today.getDay()];

if (pTodayDate != null)
{
    pTodayDate.innerHTML = `Today is ${todayDayOfWeek}, ${todayMonth} ${today.getDate()}, ${today.getFullYear()}`;
}

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

let pBirthDate = document.getElementById("input--date-picker");
let pBirthDateButton = document.getElementById("button--birthday");

if( pBirthDateButton != null)
{
    pBirthDateButton.onclick = function (){
        //console.log(pBirthDate.value);
        let birthDate : Date = new Date(pBirthDate.value);
        //console.log(birthDate);
        birthDate.setTime(birthDate.getTime() + 240*60*1000);
        //console.log(birthDate);
        document.getElementById("p--birthday-message").innerHTML = checkBirthDate(birthDate);
    }
}

function checkBirthDate( date : Date ) :string{
    console.log(date);
    console.log(today);
    if ( date.getMonth() == today.getMonth() &&
         date.getDate() == today.getDate() )
         {
            return "Happy birthday!";
         }
         else
         {             
             let birthDateCurrentYear = new Date(today.getFullYear(),date.getMonth(),date.getDate());
             return `Your birthday will be on ${days[birthDateCurrentYear.getDay()]} ${months[birthDateCurrentYear.getMonth()]} ${birthDateCurrentYear.getDate()}, ${birthDateCurrentYear.getFullYear()}`;
         }
}
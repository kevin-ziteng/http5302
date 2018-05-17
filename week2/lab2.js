var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["Augest"] = 7] = "Augest";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
// html elements
var pTodayDate = document.getElementById("p--today-date");
var today = new Date();
var todayMonth = months[today.getMonth()];
var todayDayOfWeek = days[today.getDay()];
if (pTodayDate != null) {
    pTodayDate.innerHTML = "Today is " + todayDayOfWeek + ", " + todayMonth + " " + today.getDate() + ", " + today.getFullYear();
}
var pBirthDate = document.getElementById("input--date-picker");
var pBirthDateButton = document.getElementById("button--birthday");
if (pBirthDateButton != null) {
    pBirthDateButton.onclick = function () {
        //console.log(pBirthDate.value);
        var birthDate = new Date(pBirthDate.value);
        //console.log(birthDate);
        birthDate.setTime(birthDate.getTime() + 240 * 60 * 1000);
        //console.log(birthDate);
        document.getElementById("p--birthday-message").innerHTML = checkBirthDate(birthDate);
    };
}
function checkBirthDate(date) {
    console.log(date);
    console.log(today);
    if (date.getMonth() == today.getMonth() &&
        date.getDate() == today.getDate()) {
        return "Happy birthday!";
    }
    else {
        var birthDateCurrentYear = new Date(today.getFullYear(), date.getMonth(), date.getDate());
        return "Your birthday will be on " + days[birthDateCurrentYear.getDay()] + " " + months[birthDateCurrentYear.getMonth()] + " " + birthDateCurrentYear.getDate() + ", " + birthDateCurrentYear.getFullYear();
    }
}

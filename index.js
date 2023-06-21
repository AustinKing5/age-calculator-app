// Declaring all variables
var userDay = document.getElementById("days");
var userMonth = document.getElementById("months");
var userYear = document.getElementById("years");

const dayError = document.querySelector("span.err-day");
const monthError = document.querySelector("span.err-month");
const yearError = document.querySelector("span.err-year");

var label1 = document.querySelectorAll("label")[0];
var label2 = document.querySelectorAll("label")[1];
var label3 = document.querySelectorAll("label")[2];

var formSubmit = document.getElementById("submitForm");

// this function ensures that user month input < 10 is prepended with a 0
var updateText = function () {
    userMonth.value = ('00' + userMonth.value).slice(-2);
}

var updateText2 = function () {
    userDay.value = ('00' + userDay.value).slice(-2);
}

userMonth.addEventListener("keyup", updateText, false);
userDay.addEventListener("keyup", updateText2, false);

userDay.addEventListener("input", (e) => {
    dayError.textContent = "";
    userDay.classList.remove("error-Active");
    label1.classList.remove("active");
});
userMonth.addEventListener("input", (e) => {
    monthError.textContent = "";
    userMonth.classList.remove("error-Active");
    label2.classList.remove("active");
});

userYear.addEventListener("input", (e) => {
    yearError.textContent = "";
    userYear.classList.remove("error-Active");
    label3.classList.remove("active");
});


// The submit event listener 
formSubmit.addEventListener("submit", function (event) {
    event.preventDefault();

    const isInValid = userDay.value.length === 0;
    const isInValid1 = userMonth.value.length === 0;
    const isInValid2 = userYear.value.length === 0;


    // This statment checks and displays the approriate error message depending on which input field is empty 
    if (isInValid && isInValid1 && isInValid2) {

        userDay.classList.add("error-Active");
        userMonth.classList.add("error-Active");
        userYear.classList.add("error-Active");

        label1.classList.add("active");
        label2.classList.add("active");
        label3.classList.add("active");

        dayError.textContent = "This field is required";
        monthError.textContent = "This field is required";
        yearError.textContent = "This field is required";

    } else if (isInValid && isInValid1) {
        label1.classList.add("active");
        label2.classList.add("active");

        userDay.classList.add("error-Active");
        userMonth.classList.add("error-Active");

        dayError.textContent = "This field is required";
        monthError.textContent = "This field is required";

    } else if (isInValid && isInValid2) {
        label1.classList.add("active");
        label3.classList.add("active");

        userDay.classList.add("error-Active");
        userYear.classList.add("error-Active");

        dayError.textContent = "This field is required";
        yearError.textContent = "This field is required";

    } else if (isInValid1 && isInValid2) {
        label2.classList.add("active");
        label3.classList.add("active");

        userMonth.classList.add("error-Active");
        userYear.classList.add("error-Active");

        monthError.textContent = "This field is required";
        yearError.textContent = "This field is required";

    } else if (isInValid) {
        label1.classList.add("active");
        userDay.classList.add("error-Active");
        dayError.textContent = "This field is required";

    } else if (isInValid1) {
        label2.classList.add("active");
        userMonth.classList.add("error-Active");
        monthError.textContent = "This field is required";

    } else if (isInValid2) {
        label3.classList.add("active");
        userYear.classList.add("error-Active");
        yearError.textContent = "This field is required";

    } else {
        leapYear();

    }
});


// This function checks the validity of user's input
function valiDate() {
    var userDay = document.getElementById("days").valueAsNumber;
    var userMonth = parseInt(document.getElementById("months").value);
    var userYear = parseInt(document.getElementById("years").value);

    var date = new Date();
    var currentYear = date.getUTCFullYear();
    var currentMonth = date.getMonth() + 1;
    var currentDay = date.getDate();

    if (userYear > currentYear && userMonth > 12 && userDay > 31) {
        showError();
    } else if (userYear === currentYear && userMonth > currentMonth) {
        showError();
    } else if (userYear === currentYear && userMonth === currentMonth && userDay > currentDay) {
        showError();
    } else if (userYear > currentYear) {
        showError();
    } else if (userMonth > 12 && userDay > 31) {
        showError();
    } else if (userMonth > 12) {
        showError();
    } else if (userMonth === 2 && userDay < 29) {
        calDate();
    } else if (
        userMonth === 4 ||
        userMonth === 6 ||
        userMonth === 9 ||
        (userMonth === 11 && userDay < 31)
    ) {
        calDate();
    } else if (
        userMonth === 1 ||
        userMonth === 3 ||
        userMonth === 5 ||
        userMonth === 7 ||
        userMonth === 8 ||
        userMonth === 10 ||
        (userMonth === 12 && userDay < 32)
    ) {
        calDate();
    } else {
        showError();
    }


    // This function handles our customer error message that is displayed to the user 
    function showError() {
        if (userYear > currentYear && userMonth > 12 && userDay > 31) {
            dayError.textContent = "Must be a valid day";
            monthError.textContent = "Must be a valid Month";
            yearError.textContent = "Must be in the past";
        } else if (userYear === currentYear && userMonth > currentMonth) {
            dayError.textContent = "Must be a valid day";
            monthError.textContent = "Must be a valid Month";
            yearError.textContent = "Must be in the past";
        } else if (userYear === currentYear && userMonth === currentMonth && userDay > currentDay) {
            dayError.textContent = "Must be a valid day";
            monthError.textContent = "Must be a valid Month";
            yearError.textContent = "Must be in the past";
        } else if (userMonth > 12 && userDay > 31) {
            dayError.textContent = "Must be a valid day";
            monthError.textContent = "Must be a valid Month";
        } else if (userYear > currentYear) {
            yearError.textContent = "Must be in the past";
        } else if (userMonth > 12) {
            monthError.textContent = "Must be a valid Month";
        } else if (userDay > 31) {
            dayError.textContent = "Must be a valid day";
        } else if (userMonth === 2 && userDay > 28) {
            dayError.innerHTML = "Must be a valid day";
        }


    }
}


// This function Calculates Users Age 
function calDate() {
    // Gets Input from User and converts it from string to number using "".valueAsNumber"
    var userDay = document.getElementById("days").valueAsNumber;
    var userMonth = document.getElementById("months").valueAsNumber;
    var userYear = document.getElementById("years").valueAsNumber;

    // this variable contains the number days in each month
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // This list of variables retrieves the current date, month and year
    var date = new Date();
    var currentYear = date.getUTCFullYear();
    var currentMonth = date.getMonth() + 1;
    var currentDay = date.getDate();

    // resulting year after calculations is stored here and output is presented to the user
    var resultingMonth = 0;
    var resultingYear = 0;
    var resultingDay = 0;

    if (userMonth === currentMonth && userDay === currentDay) {
        resultingYear = currentYear - userYear;

    } else if (userMonth === currentMonth && userDay < currentDay) {
        resultingDay = Math.abs(currentDay - userDay);
        resultingYear = currentYear - userYear;

    } else if (userMonth === currentMonth && userDay > currentDay) {
        resultingDay = daysInMonth[(currentMonth - 1)] - (userDay - currentDay);
        resultingMonth = 12 - userMonth + (currentMonth - 1);
        resultingYear = currentYear - 1 - userYear;

    } else if (currentMonth > userMonth) {
        if (userDay === 1) {
            resultingDay = (currentDay - 1);
            resultingMonth = (currentMonth - userMonth);

        } else if (userDay === daysInMonth[userMonth - 1]) {
            resultingDay = currentDay;
            resultingMonth = (currentMonth - 1) - userMonth;

        } else if (userDay < currentDay) {
            resultingDay = (currentDay - userDay);
            resultingMonth = (currentMonth - 1) - userMonth;

        } else {
            var sum6 = 0;
            sum6 = daysInMonth[userMonth - 2] - userDay;
            resultingDay = sum6 + currentDay;
            resultingMonth = (currentMonth - 1) - userMonth;
        }

        resultingYear = currentYear - userYear;

    } else if (currentMonth < userMonth) {
        if (userDay === 1) {
            resultingDay = currentDay;
            resultingMonth = (12 - userMonth) + currentMonth;
        } else if (userDay === daysInMonth[(userMonth - 1)]) {
            resultingDay = currentDay;
            resultingMonth = 12 - userMonth + (currentMonth - 1);
        }
        else {
            var sum3 = 0;
            sum3 = daysInMonth[currentMonth - 1] - userDay;

            resultingDay = sum3 + currentDay;
            resultingMonth = 12 - userMonth + (currentMonth - 1);

        }
        resultingYear = (currentYear - 1) - userYear;
    }


    // this line of code ouputs results (users age) to the user
    if (resultingDay === 1) {

        let text1 = document.getElementById('outputYear');
        let text2 = document.getElementById('outputMonth').innerHTML;
        document.getElementsByTagName("h1")[2].innerHTML = '<span id = "outputDay" class="dash"></span>day';
        let text3 = document.getElementById('outputDay');
        const load = () => {
            animate(text1, 0, resultingYear, 4000);
            animate(text2, 0, resultingMonth, 4000);
            animate(text3, 100, resultingDay, 4000);
        }
        load();
        reset1();

    } else {
        let text1 = document.getElementById('outputYear');
        let text2 = document.getElementById('outputMonth');
        let text3 = document.getElementById('outputDay');
        const load = () => {
            animate(text1, 0, resultingYear, 4000);
            animate(text2, 0, resultingMonth, 4000);
            animate(text3, 100, resultingDay, 4000);
        }
        load();
        reset1();

    }


}

var reset1 = function () {
    setTimeout(function () {
        document.getElementById("submitForm").reset();
    }, 10000);
};


// Animation function

function animate(obj, initVal, lastVal, duration) {
    var obj;
    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime) => {

        //if the start time is null, assign the current time to startTime
        if (!startTime) {
            startTime = currentTime;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime - startTime) / duration, 1);

        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    //start animating
    window.requestAnimationFrame(step);
}

function leapYear() {
    var userYear = parseInt(document.getElementById("years").value);

    if (userYear % 4 === 0 && userYear % 100 !== 0) {
        leapYearTest();

    } else if (userYear % 100 === 0 && userYear % 400 === 0) {
        leapYearTest();

    } else {
        valiDate();
    }

}


function leapYearTest() {
    var userMonth = parseInt(document.getElementById("months").value);
    if (userMonth === 2) {
        leapYearError();
    } else {
        valiDate();
    }

}

function leapYearError() {
    var userDay = document.getElementById("days").valueAsNumber;
    if (userDay > 29) {
        dayError.innerHTML = "Must be a valid day";
    } else {
        calDate();
    }
}



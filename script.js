// Global Scope Vars //
var fullDate = new Date();
var year = fullDate.getFullYear();
var result;
var first;



// Problem 1 //
function answerOne() {
    var month = (fullDate.getMonth() + 1);
    var day = fullDate.getDate();
    var dateArray = [month, day, year];
    var dateAsString = dateArray.join('/');
    document.getElementById("Answer1").innerHTML = dateAsString;
}


// Problem 2 //
function answerTwo() {
    if (year % 4 == 400) {
        result = true
    } else if (year % 100 != 0) {
        result = false
    } else if (year % 4 == 0) {
        result = true
    }
    if (result === true) {
        document.getElementById("Answer2").innerHTML = "We are in a leap year."
    } else {
        document.getElementById("Answer2").innerHTML = "We are not in a leap year."
    }
}


// Problem 3 //
function answerThree() {
    var numArray = [1, 2, 3, 4, 5]
    numArray.sort(function (a, b) {
        return a - b
    });

    for (var i = 0; i < (numArray.length - 1);) {
        if (numArray[i + 1] == numArray[i] + 1) {
            result = true, i++;
        } else {
            result = false;
        }
    }
    if (result === true) {
        document.getElementById("Answer3").innerHTML = "[" + numArray + "]" + " - These numbers are consecutive"
    } else {
        document.getElementById("Answer3").innerHTML = "[" + numArray + "]" + " - These numbers are not consecutive"
    }
}


// Problem 4 //
function answerFour() {
    var randomArray = [];
    for (var i = 0; i < 5; i++) {
    randomArray.push(Math.round(Math.random() * 10))
}
    randomArray.sort(function (a, b) {
        return a - b
    });
    for (var i = 0; i < randomArray.length;) {
        if (randomArray[i] === randomArray[i + 1]) {
            result = true;
            break;
        } else {
            result = false, i++;
        }
    }
    if (result == 1) {
        document.getElementById("Answer4").innerHTML = "Within the array of 5 numbers, [" + randomArray + "], - There ARE repeated numbers."
    } else if (result == 0) {
        document.getElementById("Answer4").innerHTML = "Within the array of 5 numbers, [" + randomArray + "], - There NO repeated numbers."
    } else {
        alert("error");
    }
}


// Problem 5 //

first = function (array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[0];
    if (n < 0)
        return [];
    return array.slice(0, n);
};


// Problem 6 //
var myColor = ["Red", "Green", "White", "Black"];
var myString = myColor.join('+');

// Problem 7 //
function answerSeven() {
    var randomArray = [];
    for (var i = 0; i < 10; i++) {
        randomArray.push(Math.round(Math.random() * 10))
    }
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < randomArray.length; i++) {
        for (var j = i; j < randomArray.length; j++) {
            if (randomArray[i] == randomArray[j])
                m++;
            if (mf < m) {
                mf = m;
                item = randomArray[i];
            }
        }
        m = 0;
    }
    document.getElementById("Answer7").innerHTML = "Within the array of 10 numbers, [" + randomArray + "], the number " + item + " appears the most, at " + mf + " times."
}

// Problem 8 //
function answerEight() {
    var randomArray = [];
    for (var i = 0; i < 10; i++) {
        randomArray.push(Math.round(Math.random() * 10))
    }
var sorted_ra = randomArray.sort();
var results = [];
for (var i = 0; i < randomArray.length - 1; i++) {
    if (sorted_ra[i + 1] == sorted_ra[i]) {
        results.push(sorted_ra[i]);
    }
}

document.getElementById("Answer8").innerHTML = "Within the array of 10 numbers, [" + randomArray + "], " + results
}

// Problem 9 //
function answerNine(str) {
    return str;
}

// Problem 10 //
function answerTen(str) {
    return str == str.split('').reverse().join('');
}

// problem 11 //

// problem 12 //
function answerTwelve(str) {
    return str.split('').sort().join('');
}

// problem 13 //
function answerThirteen() {
        var randomArray = [];
    for (var i = 0; i < 5; i++) {
        randomArray.push(Math.round(Math.random() * 10))
    }
    numArray.sort(function (a, b) {
        return a - b
    });
    document.getElementById("Answer13").innerHTML = "Within the array of 5 numbers, [" + randomArray + "], " randomArray[1] + randomArray[(randomArray.length - 1)]
}

//problem 14 //

function answerFourteen(str){
    var unique='';
    for(var i=0; i<str.length; i++){
        if(unique.indexOf(str[i])==-1){
            unique += str[i];
        }
    }
    return unique;
}

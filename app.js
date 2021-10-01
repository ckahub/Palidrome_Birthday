const b_date=document.querySelector("#birthday_input");
const btn= document.querySelector("#btn_show");
const palindromeResult =document.querySelector("#result");

// btn.addEventListener("click",result)


function reverseStr(str)
{
    var listOfChars = str.split('');
    var ReverseListOfChars=listOfChars.reverse();
    var reverseStr=ReverseListOfChars.join("")
    return reverseStr;

    // return str.split('').reverse.join('');
}


function isPalindrome(str)
{
    var reverse=reverseStr(str);
    return str===reverse;   
      
}

var date =
{
    day:2,
    month:04,
    year:1994
}


function convertDateToString(date)
{
    var dateStr = {day:'',month:'',year:''};

    if(date.day<10)
    {
        dateStr.day='0'+date.day;
    }
    else
    {
        dateStr.day=date.day.toString();
    }


    if(date.month<10)
    {
        dateStr.month='0'+date.month;
    }
    else
    {
        dateStr.month=date.month.toString();
    }

    dateStr.year=date.year.toString();

    return dateStr;

}


function getAllDateFormats()
{
    var dateStr = convertDateToString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy   = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy   = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd   = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    
    return[ddmmyy,mmddyy,yymmdd,ddmmyyyy,mmddyyyy,yyyymmdd];
}

console.log(getAllDateFormats(date));
console.log(convertDateToString(date));
console.log(isPalindrome("oppo"));
console.log(isPalindrome("242"));
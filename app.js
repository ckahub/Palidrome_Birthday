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
    day:20,
    month:02,
    year:2002
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

function checkPalindrome(date)
{
    var listOfDates=getAllDateFormats(date);

    flag=false;
    for(var i=0;i<listOfDates.length;i++)
    {
        if(isPalindrome(listOfDates[i]))
        {
            flag=true;
            break;
        }

    }
    return flag;
}

function leapYear(year)
{
    if(year%400===0)
    {
        return true;
    }
    if(year%100 ===0)
    {
        return false;
    }
    if(year%4===0)
    {
        return true;
    }

    return false;
}
;
function getNextDate(date)
{
    var day= date.day+1;
    var month=date.month;
    var year=date.year;

    var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];



    if(month===2)
    {
        if(leapYear(year))
        {
            if(day>29)
            {
                day=1;
                month++;
            }
            
        }
        else
        {
            if(day>28)
            {
                day=1;
                month++;
            }
        }

    }
    else
    {
        if(day>daysInMonth[month-1])
        {
            day=1;
            month++;
        }
    }

    if(month>12)
    {
        month=1;
        year++;
    }

    return
    {
        day:day;
        month:month;
        year:year

    };
}
const IS_PART_Time=0;
const IS_FULL_Time=1;
const Wages_Per_Hours=20;
const Part_Time_Working_Hours=4;
const Full_Time_Working_Hours=8;


function GetWorkingHours(empCheck)
{
    switch(empCheck){
        case IS_PART_Time :
           return Part_Time_Working_Hours;
        
        case IS_FULL_Time :
            return Full_Time_Working_Hours;
        
        default :
            return 0;
    }
    
}

let empHrs=0;
let empCheck= Math.floor(Math.random()*10)%3;
empHrs=GetWorkingHours(empCheck);
let empWage=empHrs*Wages_Per_Hours;
console.log("Emp-Wages:"+empWage);
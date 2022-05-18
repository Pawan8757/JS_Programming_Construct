const IS_PART_Time=0;
const IS_FULL_Time=1;
const Wages_Per_Hours=20;
const Part_Time_Working_Hours=4;
const Full_Time_Working_Hours=8;
const NO_OF_WORKING_DAYS=20;
let empHrs=0;
let totalempHrs=0;

for(let day=1;day<=NO_OF_WORKING_DAYS; day++)
{
    
let EmpInput= Math.floor(Math.random()*10)%3;

function GetWorkingHours(EmpInput)
{
   
    switch(EmpInput){
        case IS_PART_Time :
           return Part_Time_Working_Hours;
        
        case IS_FULL_Time :
            return Full_Time_Working_Hours;
        
        default :
            return 0;
    }
    
}
empHrs=GetWorkingHours(EmpInput);
totalempHrs+=empHrs;
let empWage=Wages_Per_Hours*totalempHrs;
console.log("Emp-Wages:"+empWage);
}



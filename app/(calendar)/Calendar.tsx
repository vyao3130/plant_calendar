import { add, differenceInDays, endOfMonth, format, isDate, startOfMonth, sub } from "date-fns";
import Cell from "./Cell";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const springFrostDate = new Date(2024, 10, 11);
const fallFrostDate = new Date(2024, 10, 12);

interface Props{
    value?: Date;
    springFDate?: Date;
    fallFDate?: Date;
    onChange?: (value:Date) => void;
}

function makeArrayCal(date : Date, value : Date, calendarDays : Array<boolean>){

    if(date.getMonth() == value.getMonth())
    {
        calendarDays[date.getDate()-1] = true;
    }
    return calendarDays
}

const Calendar: React.FC<Props> = ({fallFDate = new Date(), springFDate = new Date(), value = new Date(), onChange}) => {
    
    const currDate = new Date();
    const startDate = startOfMonth(value);
    const endDate = endOfMonth(value);
    const numDays = differenceInDays(endDate, startDate) + 1;
    
    const prefixDays = startDate.getDay();
    const postfixDays = 6 - endDate.getDay();

    const prevYear = () => onChange && onChange(sub(value, {years:1}));
    const prevMonth = () => onChange && onChange(sub(value, {months:1}));
    const nextMonth = () => onChange && onChange(add(value, {months:1}));
    const nextYear = () => onChange && onChange(add(value, {years:1}));

    const currentDate = () => onChange && onChange(currDate);
    const springDate = () => onChange && onChange(springFDate);
    const fallDate = () => onChange && onChange(fallFDate);
    const dateFormatted = format(value, "MMMM yyy");

    
    // Make an array of days - if the current month is being displayed, add the true/false 
    // var calendarDays = Array.from({length:numDays}).map((_, index) => (false));
    var calendarDays = Array.from({length:numDays}).map((_, index) => (false));
    if(currDate.getMonth() == value.getMonth())
    {
        calendarDays[currDate.getDate()-1] = true;
    }
    if(springFDate.getMonth() == value.getMonth())
    {
        calendarDays[springFDate.getDate()-1] = true;
    }
    if(fallFDate.getMonth() == value.getMonth())
    {
        calendarDays[fallFDate.getDate()-1] = true;
    }
    
    return <div>
        <div className="w-[70vw] border-t border-l grid grid-cols-7 items-center
            justify-center text-center">
            <Cell onClick={prevYear}>{"<<"}</Cell>
            <Cell onClick={prevMonth}>{"<"}</Cell>
            <Cell className="col-span-3">{dateFormatted}</Cell>
            <Cell onClick={nextMonth}>{">"}</Cell>
            <Cell onClick={nextYear}>{">>"}</Cell>

            {daysOfWeek.map((day) =>(
                <Cell key={day} className="text-sm font-bold">
                    {day}
                </Cell>
            ))}

            {Array.from({length: prefixDays}).map((_, index) => (
                <Cell key={index}/>
            ))}

            {calendarDays.map((num, index) => (
                <Cell key={index} today={num}>
                    {index + 1}
                </Cell>
            ))}
            {/* {Array.from({length: numDays}).map((_, index) =>(
                <Cell key={index}>{index+1}</Cell>
            ))} */}

            {Array.from({length: postfixDays}).map((_, index) => (
                <Cell key={index}/>
            ))}
        </div>
                
        <div className="pt-7 grid grid-cols-7 items-center
            justify-center text-center">
            <Cell className="col-span-2"onClick={springDate}> 🌸 Spring Frost Date</Cell>
            <Cell className="col-span-3" onClick={currentDate}>Go To Today</Cell>
            <Cell className="col-span-2" onClick={fallDate}>🍂 Fall Frost Date</Cell>
        </div>
    </div>
    
};

export default Calendar;
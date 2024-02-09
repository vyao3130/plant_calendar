import { add, differenceInDays, endOfMonth, format, startOfMonth, sub } from "date-fns";
import Cell from "./Cell";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

interface Props{
    value?: Date;
    onChange?: (value:Date) => void;
}



const Calendar: React.FC<Props> = ({value = new Date(), onChange}) => {

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
    const dayToday = currDate.getDate();
    const dateFormatted = format(value, "MMMM yyy");
    
    // Make an array of days - if the current month is being displayed, add the true/false 
    var calendarDays = Array.from({length:numDays}).map((_, index) => (false));
    if(currDate.getMonth() == value.getMonth())
    {
        calendarDays = Array.from({length:numDays}).map((_, index) => (index === dayToday-1));
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
            <Cell className="col-span-2"> 🌸 Spring Frost Date</Cell>
            <Cell className="col-span-3" onClick={currentDate}>Go To Today</Cell>
            <Cell className="col-span-2">🍂 Fall Frost Date</Cell>
        </div>
    </div>
    
};

export default Calendar;
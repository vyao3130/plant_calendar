import { add, differenceInDays, endOfMonth, format, startOfMonth, sub } from "date-fns";
import Cell from "./Cell";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

interface Props{
    value?: Date;
    onChange?: (value:Date) => void;
}



const Calendar: React.FC<Props> = ({value = new Date(), onChange}) => {

    const newDate = new Date();
    const startDate = startOfMonth(value);
    const endDate = endOfMonth(value);
    const numDays = differenceInDays(endDate, startDate) + 1;
    
    const prefixDays = startDate.getDay();
    const postfixDays = 6 - endDate.getDay();

    const prevYear = () => onChange && onChange(sub(value, {years:1}));
    const prevMonth = () => onChange && onChange(sub(value, {months:1}));
    const nextMonth = () => onChange && onChange(add(value, {months:1}));
    const nextYear = () => onChange && onChange(add(value, {years:1}));

    const currentDate = () => onChange && onChange(newDate);

    const dateFormatted = format(value, "MMMM yyy");
    if(true)
    {
        console.log("SDFJDLSF")
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

            {Array.from({length: numDays}).map((_, index) =>(
                <Cell key={index}>{index+1}</Cell>
            ))}

            {Array.from({length: postfixDays}).map((_, index) => (
                <Cell key={index}/>
            ))}
        </div>
                
        <div className="pt-7 grid grid-cols-7 items-center
            justify-center text-center">
            <Cell className="col-span-2">Spring Frost Date</Cell>
            <Cell className="col-span-3" onClick={currentDate}>Go To Today</Cell>
            <Cell className="col-span-2">Fall Frost Date</Cell>
        </div>
    </div>
    
};

export default Calendar;
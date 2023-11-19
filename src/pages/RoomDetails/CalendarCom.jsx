/* eslint-disable react/prop-types */
import { DateRange } from "react-date-range";

function CalendarCom({ value, handleSelect }) {
  return (
    <div>
      <DateRange
        rangeColors={["#F43F5E"]}
        direction="vertical"
        showDateDisplay={false}
        ranges={[value]}
      />
    </div>
  );
}

export default CalendarCom;

/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import CalendarCom from "../../pages/RoomDetails/CalendarCom";
import Button from "../Button/Button";
import { useState } from "react";

function RoomReservation({ roomData }) {
  const totalDays = +formatDistance(
    new Date(roomData.to),
    new Date(roomData.from)
  ).split(" ")[0];

  const totalPrice = totalDays * Number(roomData.price);
  // console.log(totalPrice);
  const [value, setValue] = useState({
    startDate: new Date(roomData.from),
    endDate: new Date(roomData.to),
    key: "selection",
  });

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <p className="text-2xl font-semibold">$ {roomData.price}</p>
        <p className="font-light text-neutral-600">Night</p>
      </div>
      <hr />
      <div className="flex justify-center">
        <CalendarCom value={value}></CalendarCom>
      </div>
      <hr />
      <div className="p-4">
        <Button label={`Reserve`} />
      </div>
      <hr />
      <div className="flex items-center justify-between p-4 text-lg font-semibold">
        <p>Total</p>
        <p>$ {totalPrice}</p>
      </div>
    </div>
  );
}

export default RoomReservation;

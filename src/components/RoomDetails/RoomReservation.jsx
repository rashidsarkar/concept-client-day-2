/* eslint-disable react/prop-types */
import CalendarCom from "../../pages/RoomDetails/CalendarCom";
import Button from "../Button/Button";

function RoomReservation({ roomData }) {
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <p className="text-2xl font-semibold">$ {roomData.price}</p>
        <p className="font-light text-neutral-600">Night</p>
      </div>
      <hr />
      <div className="flex justify-center">
        <CalendarCom></CalendarCom>
      </div>
      <hr />
      <div className="p-4">
        <Button label={`Reserve`} />
      </div>
      <hr />
      <div className="flex items-center justify-between p-4 text-lg font-semibold">
        <p>Total</p>
        <p>$ {roomData.price}</p>
      </div>
    </div>
  );
}

export default RoomReservation;

/* eslint-disable react/prop-types */
function RoomInfo({ roomData }) {
  return (
    <div className="flex flex-col col-span-4 gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 text-xl font-semibold ">
          <div>Hosted by {roomData.host.name}</div>

          <img
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={roomData.host.image}
          />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{roomData.guests} guests</div>
          <div>{roomData.bedrooms} rooms</div>
          <div>{roomData.bathrooms} bathrooms</div>
        </div>
      </div>

      <hr />
      <div className="text-lg font-light text-neutral-500">
        {roomData.description}
      </div>
      <hr />
    </div>
  );
}

export default RoomInfo;

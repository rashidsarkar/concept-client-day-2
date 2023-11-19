import { useSearchParams } from "react-router-dom";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CustomLoading from "../Loader/CustomLoading";
import Container from "../Shared/Container";
import Card from "./Card";
import axiosInstancePublic from "../../AxiosAPI/axiosInstancePublic";
import { useQuery } from "@tanstack/react-query";
import useRoomData from "../../API/useRoomData";
import Heading from "../Shared/Heading/Heading";

function Rooms() {
  const { roomsData, isLoading, isError, error } = useRoomData();

  if (isLoading) return <CustomLoading></CustomLoading>;
  if (isError) return <ErrorMessage error={error}></ErrorMessage>;

  return (
    <Container>
      {roomsData && roomsData.length > 0 ? (
        <div className="grid grid-cols-1 pt-12 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
          {roomsData.map((room) => {
            return <Card key={room._id} room={room}></Card>;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title={`No Rooms available is this category!`}
            subtitle={`please select other categories`}
          ></Heading>
        </div>
      )}
    </Container>
  );
}

export default Rooms;

import { useParams, useSearchParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import useSingleRoomData from "../../API/useSingleRoomData";
import CustomLoading from "../../components/Loader/CustomLoading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import CalendarCom from "./CalendarCom";
import RoomReservation from "../../components/RoomDetails/RoomReservation";

function RoomDetails() {
  // const { id } = useParams();
  const { singleRoomData, isLoading, isError, error } = useSingleRoomData();
  // console.log(singleRoomData);

  if (isLoading) return <CustomLoading></CustomLoading>;
  if (isError) return <ErrorMessage error={error}></ErrorMessage>;

  return (
    <Container>
      <Helmet>
        <title>{singleRoomData.title}</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header roomData={singleRoomData}></Header>
        </div>
        <div className="grid grid-cols-1 mt-6 md:grid-cols-7 md:gap-10">
          <RoomInfo roomData={singleRoomData}></RoomInfo>
          <div className="order-first col-span-3 mb-10 md:order-last">
            {/* <CalendarCom></CalendarCom> */}
            {/* RoomReservation */}
            <RoomReservation roomData={singleRoomData}></RoomReservation>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default RoomDetails;

import { useParams, useSearchParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import useSingleRoomData from "../../API/useSingleRoomData";
import CustomLoading from "../../components/Loader/CustomLoading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";

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
      <div>
        <div className="flex flex-col gap-6">
          <Header roomData={singleRoomData}></Header>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7">
          <RoomInfo roomData={singleRoomData}></RoomInfo>

          <h1 className="col-span-3 bg-red-300  h-36">Calender</h1>
        </div>
        <div>{/* calender */}</div>
      </div>
    </Container>
  );
}

export default RoomDetails;

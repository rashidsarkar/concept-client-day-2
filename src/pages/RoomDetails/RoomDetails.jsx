import { useParams, useSearchParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import useSingleRoomData from "../../API/useSingleRoomData";
import CustomLoading from "../../components/Loader/CustomLoading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Helmet } from "react-helmet-async";

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
        <div className="flex flex-col gap-6">{/* header */}</div>
        <div>{/* room info */}</div>
        <div>{/* calender */}</div>
      </div>
    </Container>
  );
}

export default RoomDetails;

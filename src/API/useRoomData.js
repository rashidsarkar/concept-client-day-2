import { useQuery } from "@tanstack/react-query";
import axiosInstancePublic from "../AxiosAPI/axiosInstancePublic";
import { useSearchParams } from "react-router-dom";

function useRoomData() {
  const [params, setParams] = useSearchParams();
  const categoryParams = params.get("category");
  const {
    data: roomsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => {
      const res = await axiosInstancePublic.get("/api/rooms");
      if (categoryParams) {
        const filtered = res.data.filter(
          (room) => room.category === categoryParams
        );
        return filtered;
      } else {
        return res.data;
      }
    },

    queryKey: ["roomsData", categoryParams],
  });

  return { roomsData, isLoading, isError, error };
}

export default useRoomData;

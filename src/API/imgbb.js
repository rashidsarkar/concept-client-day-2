import axios from "axios";

const imageUpload = async (img) => {
  const fromData = new FormData();
  fromData.append("image", img);
  // console.log(fromData);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBBAPI_KEY}`,
    fromData
  );
  return data.data;
};
export default imageUpload;

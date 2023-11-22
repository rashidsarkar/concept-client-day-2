import axiosInstanceSecure from "../AxiosAPI/axiosInstanceSecure";

const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "guest",
    status: "verified",
  };
  const { data } = await axiosInstanceSecure.put(
    `/users/${user?.email}`,
    currentUser
  );
  return data;
};

export default saveUser;

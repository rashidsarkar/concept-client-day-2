import axiosInstanceSecure from "../AxiosAPI/axiosInstanceSecure";

export const saveUser = async (user) => {
  // save user data in database
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

// get token from server
export const getToken = async (email) => {
  const { data } = await axiosInstanceSecure.post(`/jwt`, email);
  console.log(`token received from server ${data}`);
  return data;
};

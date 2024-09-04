import { AuthContext } from "@/providers/AuthProvider";
import React, { useContext } from "react";

const useMyProfile = async () => {
  const { setUser } = useContext(AuthContext);

  const res = await axios.get("http://localhost:5000/user/me", {
    withCredentials: true,
  });
  console.log(res.data);
  return setUser(res.data.user);
};

export default useMyProfile;

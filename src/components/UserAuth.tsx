import { useEffect, useState } from "react";
import scss from "./UserAuth.module.scss";
import axios from "axios";
import AddItemForm from "./AddItemForm";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  auth: string;
  login: string;
  password: string;
  isActive: boolean;
  photo: string;
  phone: string;
  isPhoneVerified: boolean;
  traffic: string;
  createdAt: string;
  updatedAt: string;
}

const api = import.meta.env.VITE_URL;

const UserAuth = () => {
  const [user, setUser] = useState<User>();
  const googleLogin = () => {
    window.open(`${api}/api/v1/auth/login/google`, "_self");
  };

  const getMe = async () => {
    const { data } = await axios.get(`${api}/api/v1/auth/user`, {
      withCredentials: true,
    });
    setUser(data.user);
  };

  const logout = () => {
    window.open(`${api}/api/v1/auth/logout`, "_self");
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className={scss.user_auth}>
      <h1>UserAuth</h1>

      {user ? (
        <div className={scss.block}>
          <div className={scss.profil}>
            <img src={user?.photo} alt="avatar" />
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            <button onClick={logout}>Logout</button>
          </div>

          <AddItemForm />
        </div>
      ) : (
        <button className={scss.AuthWithGoogle} onClick={googleLogin}>
          Auth with Google
        </button>
      )}
    </div>
  );
};

export default UserAuth;

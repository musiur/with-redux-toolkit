"use client";

import { login, logout } from "@/states/features/user_slice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { userdata } = useSelector((state) => state.userdata);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userdata);
  }, [userdata]);

  return (
    <div className="flex items-center justify-start gap-10 p-10">
      <button
        onClick={() =>
          dispatch(
            login({
              login: true,
              token: "asdfalshdf98aysd89fhaoishdfoiasdfa",
              data: {
                name: "Musiur Alam Opu",
              },
            })
          )
        }
        className="px-3 py-1 rounded bg-black hover:bg-gray-600 text-white focus:outline-none"
      >
        Login
      </button>
      <button
        onClick={() => dispatch(logout())}
        className="px-3 py-1 rounded bg-red-600 hover:bg-red-400 text-white focus:outline-none"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;

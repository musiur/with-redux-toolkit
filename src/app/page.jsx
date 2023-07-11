"use client";

import { login, logout } from "@/states/features/user_slice";
import { useGetUsersQuery } from "@/states/services/users";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { userdata } = useSelector((state) => state.userdata);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetUsersQuery();
  console.log(data);

  useEffect(() => {
    console.log(userdata);
  }, [userdata]);

  return (
    <div className="py-20 px-5 lg:px-10">
      <h1 className="text-2xl lg:text-4xl font-black text-center">
        Exploring React Redux & <br /> Redux Toolkit with RTK query
      </h1>
      <div className="border-2 rounded-lg my-10 p-5 max-w-[300px] mx-auto">
        <div
          className={`w-full h-[200px] rounded-md ${
            userdata.login
              ? "bg-gray-800 text-gray-200"
              : "bg-gray-200 text-gray-600"
          } font-semibold text-center pt-10`}
        >
          {userdata.login ? "Loggedin - You can logout" : "Login please"}
        </div>
        <div className="flex items-center justify-center gap-10 mt-5">
          {userdata.login ? (
            <button
              onClick={() => dispatch(logout())}
              className="px-3 py-1 rounded bg-red-600 hover:bg-red-400 text-white focus:outline-none min-w-[100px]"
            >
              Logout
            </button>
          ) : (
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
              className="px-3 py-1 rounded bg-black hover:bg-gray-600 text-white focus:outline-none min-w-[100px]"
            >
              Login
            </button>
          )}
        </div>
        <div className="pt-3 text-center text-gray-400">
          This is for viewing the state management
        </div>
      </div>
      <div className="text-center my-10">
        <Link href="/users" className="underline font-bold hover:text-blue-600">
          Let`s try RTK query and its fetching with caching systemx
        </Link>
      </div>
    </div>
  );
};

export default Home;

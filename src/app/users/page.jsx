"use client";

import { useGetUsersQuery } from "@/states/services/users";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Users = () => {
  const [dataSize, setDataSize] = useState(4);
  const { data = [], error, isLoading } = useGetUsersQuery(dataSize);

  return (
    <div className="p-3 sm:p-5 md:p-8 lg:p-12 xl:p-16 2xl:p-20">
      <div className="sticky top-0 bg-white p-2">
        <Link href="/" className="underline hover:text-blue-600 font-bold">
          {"< Back to home"}
        </Link>
      </div>
      <h1 className="text-2xl lg:text-4xl font-black my-10">
        Users Cover photo
      </h1>

      <div className="grid grid-cols-1 gap-3 bg-gray-100 p-5 rounded-lg mb-10">
        <label htmlFor="cover_number">
          Select cover number to show. Here we have use RTK query to fetch
          desired amount of data from RestAPI. You can select 20 and go to
          offline. <br /> Amazingly you will see the beauty of RTK caching
          mechanism here. You won`t need to call API again to view less then 20
          data. Please try!
        </label>
        <select
          id="cover_number"
          className="px-3 py-1 rounded focus:outline-none border mb-10 max-w-[150px]"
          onChange={(e) => setDataSize(e.target.value)}
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
            {data.products.map((item) => {
              const { id, name, price, description, category, image } = item;
              return (
                <div key={id} className="rounded-lg border hover:shadow">
                  <Image
                    src={image}
                    alt={name}
                    height={100}
                    width={100}
                    className="w-full h-1/2 rounded-t-lg"
                  />
                  <div className="p-4 flex flex-col justify-between gap-2 h-1/2">
                    <div>
                      <h3 className="text-xl font-bold">{name}</h3>
                      <p className="text-xs text-gray-600">{description}</p>
                    </div>
                    <div className="flex items-center justify-between gap-5 flex-wrap">
                      <span className="text-orange-600 font-semibold">
                        ${price}
                      </span>
                      <span className="bg-gray-200 text-gray-600 px-[8px] py-[3px] rounded-full text-center text-[10px]">
                        {category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Users;

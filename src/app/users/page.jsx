import { useGetUsersQuery } from "@/states/services/users";

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  console.log("<<<<");
  return (
    <div>
      <h1 className="text-8xl font-black">Users</h1>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data}</h3>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Users;

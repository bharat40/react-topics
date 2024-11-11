// import React, { useEffect, useState } from "react";
// const FetchUser = () => {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const fetchApi = async () => {
//       const response = await fetch("https://random-data-api.com/api/v2/users");
//       const data = await response.json();
//       console.log(data);
//       setUser(data);
//       console.log(user);
//     };
//     fetchApi();
//   }, []);
//   return (
//     <div>
//       <p>{user.name}</p>
//       {/* {user.map((u) => (
//         console.log("insisde map")

//         // <div>
//         //   <img src={u.logo} alt="res-logo" loading="lazy" />
//         //   <h1>{u.name}</h1>
//         //   <h2>{u.description}</h2>
//         // </div>
//       ))} */}
//     </div>
//   );
// };
// export default FetchUser;

import React, { useEffect, useState } from "react";

const FetchUser = () => {
  const [user, setUser] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        "https://random-data-api.com/api/v2/users?size=5"
      );
      const data = await response.json();
      console.log("Fetched user data:", data);

      // Check if data is an array
      if (Array.isArray(data)) {
        setUser(data); // Set the fetched data if it's an array
      } else {
        setUser([data]); // If it's a single object, wrap it in an array
      }
    };
    fetchApi();
  }, []);

  // Check if user data is available before rendering
  if (!user.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {user.map((u, index) => (
        <div key={index} className="w-40 border-2">
          <img src={u.avatar} alt="User Avatar" loading="lazy" />
          <h1>
            {u.first_name} {u.last_name}
          </h1>
          <h2>{u.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default FetchUser;

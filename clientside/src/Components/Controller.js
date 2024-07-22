import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext(null);

// Create the provider component
export const UserProvider = ({ children }) => {
  const [currentUserDetails, setCurrentUserDetails] = useState({});
  const [conversationsContext, setConversationContext] = useState({});
  const [loading, setLoading] = useState(false);

    const fetchUserData = async () => {
      setLoading(true)
      try {
        const user = localStorage.getItem("user");

        if (!user) {
          console.log("Can't get user");
          return;
        }

        const parsedUser = JSON.parse(user);

        const { uid, emailVerified, disabled, metadata } = parsedUser;
        const { lastSignInTime, creationTime, lastRefreshTime } = metadata;

        const response = await fetch(
          "http://localhost:5000/auth/fetch-iuserData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ currentUserId: uid }),
          }
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.msg || "Something went wrong");
        }

        const data = await response.json();
        console.log(data);
        setCurrentUserDetails(data);
        // setConversationContext(data.conversations);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }finally {
        setLoading(false);
      }
    };

  return (
    <UserContext.Provider value={{ currentUserDetails, setCurrentUserDetails, conversationsContext, setConversationContext, setLoading, fetchUserData, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
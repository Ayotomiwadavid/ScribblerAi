import React, { createContext, useState } from "react";

const UserContext = createContext(null);

// Create the provider component
export const UserProvider = ({ children }) => {
  const [currentUserDetails, setCurrentUserDetails] = useState({});
  const [conversationsContext, setConversationContext] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      // Fetch user data based on session cookie
      const response = await fetch("http://localhost:5000/auth/fetch-userData", {
        method: "GET",
        credentials: "include", // Ensure cookies are sent with the request
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }

      const data = await response.json();
      setCurrentUserDetails(data);
      setConversationContext(data.conversations);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUserDetails,
        setCurrentUserDetails,
        conversationsContext,
        setConversationContext,
        setLoading,
        fetchUserData,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

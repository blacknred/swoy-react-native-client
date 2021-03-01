import { useState } from "react";
import { Users } from "../api";

export default function useCachedResources() {
  const [userId, setUser] = useState(null);

  const handleAuth = async (name: string) => {
    console.warn(`auth ${name}...`);

    try {
      const { id } = await Users.get({ name });
      setUser(id);
    } catch (e) {
      console.warn("user not found");
    }
  };

  return [!!userId, userId, handleAuth];
}

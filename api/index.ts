import users from "./users.json";
import chats from "./chats.json";
import chatRooms from "./chatRooms.json";
import { User } from "../types";

type ApiMethodArgs = {
  id?: string;
  name?: string;
};

interface IApiMethods {
  [key: string]: (args?: any) => Promise<any>;
}

export function delay(func: any, ms = 1000) {
  return (t?: ApiMethodArgs) =>
    new Promise((resolve) => setTimeout(() => resolve(func(t)), ms));
}

const api: IApiMethods = {
  getUsers: delay(() => users),
  getUser: delay(({ id, name = "" }: ApiMethodArgs) =>
    users.find((u) => u.id === id || u.name.startsWith(name))
  ),
  createUser: delay((user: User) => users.push(user)),
};

export default api;

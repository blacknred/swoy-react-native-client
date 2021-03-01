import users from './users';
import chats from './chats';
import chatRooms from './chatRooms';
import { User } from '../types';

type UserMethodsArgs = {
  id?: string,
  name?: string
}

interface IUserMethods {
  list: () => Promise<any>;
  get: (args: UserMethodsArgs) => Promise<any>;
  put: (args: UserMethodsArgs) => Promise<any>;
}

export function fetch(func: any, ms = 1000) {
  return (t?: UserMethodsArgs) => new Promise(resolve => setTimeout(() => resolve(func(t)), ms));
}

export const Users: IUserMethods = {
  list: fetch(() => users),
  get: fetch(({ id, name }: UserMethodsArgs) => users.find(u => u.id === id || u.name === name)),
  put: fetch((user: User) => users.push(user))
};
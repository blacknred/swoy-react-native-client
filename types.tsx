export enum Screen {
  Root = "Root",
  ChatRoom = "ChatRoom",
  Contacts = "Contacts",
  NotFound = "NotFound",
}

export enum RootTab {
  Camera = 'Camera',
  Chats = 'Chats',
  Status = 'Status',
  Calls = 'Calls',
};

export type RootStackParamList = {
  Root: undefined;
  ChatRoom: undefined;
  Contacts: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TopTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabParamList = {
  CameraScreen?: undefined;
  ChatsScreen?: undefined;
  StatusScreen?: undefined;
  CallsScreen?: undefined;
};

//

export type User = {
  id: string;
  name: string;
  imageUri: string;
  status?: string | undefined
}

export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user?: User
}

export type ChatRoom = {
  id: string;
  users: User[];
  lastMessage: Message;
}
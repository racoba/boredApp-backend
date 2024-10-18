import { v4 as uuidv4 } from 'uuid'; 
import User from '../../src/app/entities/User'; 
import UserTask from '../../src/app/entities/UserTask'; 
import Group from '../../src/app/entities/Group'; 
import { ICreateUser } from "../../src/app/interfaces/IUser"

export const mockedUserWithNoGroupsAndTasks = (user = {}): User => {
  const userTasksMock: UserTask[] = []; 
  const groupsMock: Group[] = []; 

  return {
    id: parseInt(uuidv4()), 
    username: 'mockedUser',
    password: 'mockedPassword123', 
    email: 'mockedUser@example.com',
    pictureUrl: "testimage.com", 
    userTasks: userTasksMock,
    groups: groupsMock,
    ...user, 
  } as User;
};

export const mockedUserWithNoId = (user ={}): ICreateUser => {
  const userTasksMock: UserTask[] = []; 
  const groupsMock: Group[] = []; 

  return {
    ...user, 
    username: 'mockedUser',
    password: 'mockedPassword123', 
    email: 'mockedUser@example.com',
    pictureUrl: "testimage.com", 
    userTasks: userTasksMock,
    groups: groupsMock,
  } as User;
};

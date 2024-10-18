import connection from "../src/database/connection";
import UserRepository from '../src/app/repositories/UserRepository'; 
import { mockedUserWithNoId } from "./Mock";

const userRepository = UserRepository.repository;

describe('UserRepository', () => {

  beforeAll(async () => {
    await connection.create();
  });
  
  afterAll(async () => {
    await connection.close();
  });
  
  beforeEach(async () => {
    await connection.clear();
  });
  
  it('Should find only 1 user by Id', async() => {
        const mockedUser = await mockedUserWithNoId();
        
        const createdUser = await userRepository.create(mockedUser);
        console.log(createdUser.id)
        const user = await UserRepository.getUserById(createdUser.id);

        expect(user).toHaveProperty('id', createdUser.id);
        expect(user).toHaveProperty('username', mockedUser.username);
        expect(user).toHaveProperty('email', mockedUser.email);
  });
})
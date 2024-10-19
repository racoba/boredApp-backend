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
  
  it('Should be able to create an user', async() => {
        const mockedUser = mockedUserWithNoId();
        
        const createdUser = await userRepository.create(mockedUser);

        expect(createdUser).toHaveProperty('username', mockedUser.username);
        expect(createdUser).toHaveProperty('email', mockedUser.email);
  });
})
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { BadRequestException } from '@nestjs/common';

describe('Users Controller', () => {
  let controller: UsersController;
  let service: UsersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
    controller = module.get<UsersController>(UsersController);
  });

  describe('create a user', () => {
    it('throws an error when no title is provided', async () => {      
      const name = 'Francisco'

      expect.assertions(2);

      try {
        await service.createUser({ name })
      } catch (e) {
        expect(e).toBeInstanceOf(BadRequestException);
        expect(e.message).toBe('Id is required.');
      }
    });

    it('should create a product', async () => {
      const user = {
        id: '5f2052510b43de4f083f6892',
        name:'Francisco',
      }
      jest.spyOn(service, 'createUser').mockImplementation(() => name)
    })
  })
});

import { Test, TestingModule } from '@nestjs/testing';
import { ProblemsController } from './problems.controller';
import { ProblemsService } from './problems.service'
import { BadRequestException } from '@nestjs/common';

describe('Problems Controller', () => {
  let controller: ProblemsController;
  let service: ProblemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProblemsController],
      providers: [ProblemsService],
    }).compile();

    service = module.get<ProblemsService>(ProblemsService);
    controller = module.get<ProblemsController>(ProblemsController);
  });

  describe('create a problem', () => {
    it('throws an error when no title is provided', async () => {      
      const userId = { userId: '5f2052510b43de4f083f6892' }
      const agentId = { agentId: '5f2052510b43de4f083f6892' }
      const description = 'this is the description of a problem'
      const solved = false
      const createdAt = new Date

      expect.assertions(2);

      try {
        await service.createProblem({ userId, agentId, description, solved, createdAt })
      } catch (e) {
        expect(e).toBeInstanceOf(BadRequestException);
        expect(e.message).toBe('Id is required.');
      }
    });

    it('should create a product', async () => {
      const problem = {
        solved: false,
        _id: '5f2052670b43de4f083f6893',
        userId: '5f2052510b43de4f083f6892',
        description: 'this is the description of a problem',
        createdAt: new Date
    }
      jest.spyOn(service, 'createProblem').mockImplementation(() => problem)
    })
  })
});

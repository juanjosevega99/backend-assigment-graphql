import { Test, TestingModule } from '@nestjs/testing';
import { AgentsController } from './agents.controller';
import { BadRequestException } from '@nestjs/common';
import { AgentsService } from './agents.service';

describe('Agents Controller', () => {
  let controller: AgentsController;
  let service: AgentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgentsController],
      providers: [AgentsService],
    }).compile();

    service = module.get<AgentsService>(AgentsService);
    controller = module.get<AgentsController>(AgentsController);
  });

  describe('create a agent', () => {
    it('throws an error when no data is provided', async () => {      
      const name = 'Andres'
      const availability = false

      expect.assertions(2);

      try {
        await service.createAgent({ name, availability })
      } catch (e) {
        expect(e).toBeInstanceOf(BadRequestException);
        expect(e.message).toBe('Id is required.');
      }
    });

    it('should create a product', async () => {
      const user = {
        name:'Andres',
      }
      jest.spyOn(service, 'createAgent').mockImplementation(() => name)
    })
  })
});

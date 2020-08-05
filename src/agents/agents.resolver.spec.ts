import { Test, TestingModule } from '@nestjs/testing';
import { AgentsResolver } from './agents.resolver';

describe('AgentsResolver', () => {
  let resolver: AgentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentsResolver],
    }).compile();

    resolver = module.get<AgentsResolver>(AgentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

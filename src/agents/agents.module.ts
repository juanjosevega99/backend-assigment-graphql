import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentSchema } from './schemas/agent.schema';
import { AgentsController } from './agents.controller';
import { AgentsService } from './services/agents.service';
import { AgentsResolver } from './resolvers/agents.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Agent', schema: AgentSchema}
    ])
  ],
  controllers: [AgentsController],
  providers: [AgentsService, AgentsResolver]
})
export class AgentsModule {}

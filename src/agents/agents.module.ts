import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentSchema } from './schemas/agent.schema';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';
import { AgentsResolver } from './agents.resolver';

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

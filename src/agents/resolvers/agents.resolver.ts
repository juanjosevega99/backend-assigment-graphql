import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AgentsService } from '../agents.service'
import { AgentDto } from '../../graphql'

@Resolver('Agents')
export class AgentsResolver {

  constructor(private agentsService: AgentsService) {}

  @Query('agents')
  getAgents() {
    return this.agentsService.getAgents()
  }

  @Mutation('createAgent')
  createAgent(@Args('args') data: AgentDto) {
    return this.agentsService.createAgent(data)
  }

}

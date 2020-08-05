import { Resolver, Query } from '@nestjs/graphql';
import { AgentsService } from './agents.service'

@Resolver('Agents')
export class AgentsResolver {

  constructor(private agentsService: AgentsService) {}

  @Query('agents')
  getAgents() {
    return this.agentsService.getAgents()
  }

}

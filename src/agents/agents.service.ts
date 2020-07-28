import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateAgentDTO } from './dto/create-agent.dto'
import { Agent } from './interfaces/agent.interface'

@Injectable()
export class AgentsService {

  constructor(@InjectModel('Agent') private agentModel: Model<Agent>) {}

  async createAgent(createAgentDTO: CreateAgentDTO) : Promise<Agent> {
    const agent = new this.agentModel(createAgentDTO)
    return agent
  }

}

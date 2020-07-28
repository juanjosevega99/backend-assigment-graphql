import { Controller, Post, Res, Body, HttpStatus, NotFoundException } from '@nestjs/common';

import { CreateAgentDTO } from './dto/create-agent.dto'
import { AgentsService } from './agents.service'

@Controller('agents')
export class AgentsController {

  constructor(private agentsService:AgentsService) {}

  @Post('/create')
  async createAgent(@Res() res, @Body() createAgentDTO: CreateAgentDTO) {
    const agent = await this.agentsService.createAgent(createAgentDTO)
    if (!agent) throw new NotFoundException('Error creating Agent')
    return res.status(HttpStatus.CREATED).json({
      message: 'Agent Successfully Created',
      agent
    })
  }

}

import { Controller, Post, Body, Res, HttpStatus, NotFoundException } from '@nestjs/common';

import { CreateProblemDTO } from './dto/create-problem.dto'
import { ProblemsService } from './problems.service'

@Controller('problems')
export class ProblemsController {

  constructor(private problemsService: ProblemsService) {}

  @Post('/create')
  async createProblem(@Res() res, @Body() createProblemDTO: CreateProblemDTO) {
    const problem = await this.problemsService.createProblem(createProblemDTO)
    if (!problem) throw new NotFoundException('Problem cannot be created')
    return res.status(HttpStatus.CREATED).json({
      message: 'Problem Successfully Created',
      problem
    })
  }

}

import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';

import { CreateProblemDTO } from './dto/create-problem.dto'
import { ProblemsService } from './problems.service'

@Controller('problems')
export class ProblemsController {

  constructor(private problemsService: ProblemsService) {}

  @Post('/create')
  async createProblem(@Res() res, @Body() createProblemDTO: CreateProblemDTO) {
    const problem = await this.problemsService.createProblem(createProblemDTO)
    return res.status(HttpStatus.CREATED).json({
      message: 'Problem Successfully Created',
      problem
    })
  }

}

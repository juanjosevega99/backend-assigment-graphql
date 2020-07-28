import { Controller, Post, Body, Res, HttpStatus, NotFoundException, Get, Param } from '@nestjs/common';

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

  @Get('/solved/:problemID')
  async solvedProblem(@Res() res, @Param('problemID') problemID) {
    const problemSolved = await this.problemsService.solveProblem(problemID)
    return res.status(HttpStatus.OK).json({
      message: 'Problem Successfully Solved',
      problemSolved
    })
  }

  @Get('/list')
  async listProblems(@Res() res) {
    const problems = await this.problemsService.listProblems()
    return res.status(HttpStatus.OK).json({
      message: 'List of problems',
      problems
    })
  }

}

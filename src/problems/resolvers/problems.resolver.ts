import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProblemsService } from '../problems.service'
import { ProblemDto } from '../../graphql'

@Resolver('Problems')
export class ProblemsResolver {

  constructor(private problemsService: ProblemsService) {}

  @Query('problems')
  getProblems() {
    return this.problemsService.listProblems()
  }
  
  @Mutation('createProblem')
  createProblem(@Args('args') data: ProblemDto) {
    return this.problemsService.createProblem(data)
  }

}

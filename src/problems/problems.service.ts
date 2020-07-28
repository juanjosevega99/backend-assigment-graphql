import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Problem } from './interfaces/problem.interface';
import { CreateProblemDTO } from './dto/create-problem.dto'

import { Agent } from 'src/agents/interfaces/agent.interface';

@Injectable()
export class ProblemsService {

  

}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentsModule } from './agents/agents.module';
import { UsersModule } from './users/users.module';
import { ProblemsModule } from './problems/problems.module';

@Module({
  imports: [AgentsModule, UsersModule, ProblemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

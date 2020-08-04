import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentsModule } from './agents/agents.module';
import { UsersModule } from './users/users.module';
import { ProblemsModule } from './problems/problems.module';
import { MongooseModule } from '@nestjs/mongoose'

import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';

@Module({
  imports: [
    AgentsModule, 
    UsersModule, 
    ProblemsModule,
    MongooseModule.forRoot('mongodb+srv://db_user_platzivideos:rompiendola.desde.l9l9@cluster0-f0pdk.mongodb.net/docred?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

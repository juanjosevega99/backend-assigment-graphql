import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { UsersResolver } from './resolvers/users.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema}
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}

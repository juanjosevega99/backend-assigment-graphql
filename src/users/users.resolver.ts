import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service'

@Resolver('Users')
export class UsersResolver {

  constructor(private usersService: UsersService) { }

  @Query('users')
  getUsers() {
    return this.usersService.getUsers()
  }

  // @Mutation('createUser')
  // createUser() {
  //   return this.usersService.createUser()
  // }

}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service'
import { UserDto } from './../graphql'

@Resolver('Users')
export class UsersResolver {

  constructor(private usersService: UsersService) { }

  @Query('users')
  getUsers() {
    return this.usersService.getUsers()
  }

  @Mutation('createUser')
  createUser(@Args('args') data: UserDto) {
    return this.usersService.createUser(data)
  }

}

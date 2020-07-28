import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';

import { CreateUserDTO } from './dto/create-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  
  constructor(private  usersService: UsersService) {}

  @Post('/create')
  async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.usersService.createUser(createUserDTO)
    return res.status(HttpStatus.CREATED).json({
      message: 'User Successfully Created',
      user
    })
  }

}

import { Controller, Post, Body, Res, HttpStatus, NotFoundException } from '@nestjs/common';

import { CreateUserDTO } from './dto/create-user.dto'
import { UsersService } from './services/users.service'

@Controller('users')
export class UsersController {
  
  constructor(private  usersService: UsersService) {}

  @Post('/create')
  async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.usersService.createUser(createUserDTO)
    if (!user) throw new NotFoundException('Error creating User')
    return res.status(HttpStatus.CREATED).json({
      message: 'User Successfully Created',
      user
    })
  }

}

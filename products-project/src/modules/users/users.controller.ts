import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAllUsers(){
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  findOneUser(@Param('id') id: string){
    return this.usersService.findOneUser(Number(id))
  }

  @Post()
  createUser(@Body() body:CreateUserDTO){
    return this.usersService.createUser(body);
  }

  @Put(":id")
  updateUser(@Param ("id") id:string, @Body() body:UpdateUserDTO ){
    return this.usersService.updateUser(Number(id), body);
  }

  @Delete()
  deleteUser(@Param ("id") id:string){
    return this.usersService.deleteUser(Number(id));
  }
}


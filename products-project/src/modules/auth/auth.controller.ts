import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from 'src/dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authServices:AuthService){}

    @Post()
    login(@Body() data:LoginDTO){
        return this.authServices.login(data);
    }
}

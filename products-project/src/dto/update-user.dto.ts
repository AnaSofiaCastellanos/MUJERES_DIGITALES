import {IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";
import { CreateUserDTO } from "./create-user.dto";
export class UpdateUserDTO extends CreateUserDTO{}
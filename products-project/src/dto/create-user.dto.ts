import {IsEmail, IsNotEmpty, IsNumber, IsOptional, isPositive, IsString, MaxLength, MinLength, Min,IsInt} from "class-validator";
export class CreateUserDTO{
    @IsString()
    @MinLength(10)
    name:string; 

    @IsEmail()
    email:string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(10)
    password:string;

    @IsNotEmpty()
    @IsInt()
    @IsOptional()
    @Min(0,{message:"La edad debe ser mayor o igual a 0"})
    age:number;
    
}
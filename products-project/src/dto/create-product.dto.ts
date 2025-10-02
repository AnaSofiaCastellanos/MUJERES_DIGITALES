import {IsNotEmpty,IsString, MinLength, Min,IsInt} from "class-validator";
export class CreateProductDTO{
    @IsNotEmpty()
    @IsInt()
    id:number; 

    @IsNotEmpty()
    @IsString()
    name:string; 

    @IsNotEmpty()
    @MinLength(0)
    @IsInt()
    price:number; 

    @IsNotEmpty()
    @MinLength(0)
    @IsInt()
    stock:number; 
}
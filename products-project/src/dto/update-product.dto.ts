import {IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";
import { CreateProductDTO } from "./create-product.dto";
export class UpdateProductDTO extends CreateProductDTO{}
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProduct } from 'src/interfaces/IProduct';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import { UpdateProductDTO } from 'src/dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Get()
    findAllProducts(){
        return this.productService.findAllProducts();
    }

    @Get(':id')
    findOneProduct(@Param("id") id:string){
        return this.productService.findOneProduct(Number(id));
    }
    @Post()
    createProduct(@Body() body:CreateProductDTO){
        this.productService.createProduct(body);
    }

    @Put()
    updateProduct(@Param("id") id:string, @Body () body:UpdateProductDTO){
        return this.productService.updateProduct(Number(id), body);
    }

    @Delete()
    deleteProduct(@Param("id") id:string){
        return this.productService.deleteProduct(Number(id));
    }
}

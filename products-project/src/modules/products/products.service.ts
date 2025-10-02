import { Injectable, NotFoundException } from '@nestjs/common';
import { IProduct } from 'src/interfaces/IProduct';

@Injectable()
export class ProductsService {
    private products:IProduct[]=[
        {id:1, name:"Manzana", price:2000, stock:50},
        {id:2, name:"Fresa", price:7000, stock:20},
        {id:3, name:"Banano", price:8000, stock:10}
    ]
    findAllProducts(){
        return this.products;
    }

    findOneProduct(id:number):IProduct{
        const productFind=this.products.find((product)=>product.id==id)
        if(!productFind){
            throw new NotFoundException("El producto no existe");
        }else{
            return productFind;
        }
    }
    
    createProduct(product:Omit<IProduct, "id">):IProduct{
        const newId=this.products.length>0 ? this.products[this.products.length-1].id+1 :1;
        const newProduct={
            id:newId, ...product
        }
        this.products.push(newProduct);
        return newProduct;
    }

    updateProduct(id:number,newProduct: Omit <IProduct, "id"> ):IProduct{
        const productExist=this.findOneProduct(id);
        Object.assign(productExist, newProduct);
        return productExist;
    }

    deleteProduct(id:number){
        const product=this.products.findIndex((product)=>product.id==id);
        this.products.splice(product,1)
        return {delete:true}
    }
}

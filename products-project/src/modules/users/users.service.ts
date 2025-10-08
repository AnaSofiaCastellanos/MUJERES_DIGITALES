import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from 'src/interfaces/IUser';

@Injectable()
export class UsersService {
    private users:IUser[]=[
      {id: 1, name: "Sofia", age: 15,  email:"sofia@gmail.com", password:"123458967"}, 
      {id: 2, name: "Laura", age: 20, email:"laura@gmail.com", password:"1234588888"}, 
      {id: 3, name: "Sebastian", age: 30, email:"sebas@gmail.com", password:"1234698565"}, 
    ]
  
    findAllUsers(){
      return this.users;
    }
  
    findOneUser(id:number):IUser{
      const userFind=this.users.find((user)=>user.id ===id)
      if(!userFind) throw new NotFoundException("El usuario no existe")
      return userFind;
    }
  
    createUser(user:Omit<IUser, "id">):IUser{
      const newId=this.users.length>0 ? this.users[this.users.length-1].id+1 :1;
  
      if(user.age && user.age>0 && user.age>=18){
        const newUser:IUser={
            id:newId, ...user
          }; 
        this.users.push(newUser);
        return newUser;
      }
      throw new BadRequestException("El usuario debe ser mayor de edad");
      
    }
  
    updateUser(id:number, newUser: Omit <IUser, "id">):IUser{
      const user =this.findOneUser(id);
      Object.assign(user, newUser); 
      return user;
    }
  
    deleteUser(id:number){
      const user=this.users.findIndex((user)=>user.id==id);
      this.users.splice(user,1)
      return {
        delete:true,
        message:"El usuario fue eliminado correctamente"
      }
    }
}

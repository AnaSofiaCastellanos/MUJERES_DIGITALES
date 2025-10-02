import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello():string{
    return "Hola Mundo";
  }

  getStatus(): {status:string, time:Date | string}{
    return {status:"ok", time: new Date().toISOString()}
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}), 
    UsersModule, 
    AuthModule, 
    ProductsModule, 
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(config:ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'), 
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'), 
        dbName: config.get<string>('DB_NAME'), 
        autoLoadEntities:true, 
        synchronize:false,
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

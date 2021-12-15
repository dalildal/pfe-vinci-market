
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from '../products/controllers/products.controller';
import { ProductsService } from '../products/services/products.service';
import { ProductSchema } from '../products/models/products.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
        AuthModule
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [ProductsService]
})
export class ProductsModule { }
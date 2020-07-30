import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from '@nestjsplus/knex';
import { UsersModule } from './controllers/users/users.module';
import { ProductsService } from './products/products.service';
import { ProductsService } from './controller/products/products.service';
import { ProductsService } from './controllers/products/products.service';
import { ProductsModule } from './controllers/products/products.module';
import { TaxesService } from './controllers/taxes/taxes.service';
import { TaxesModule } from './controllers/taxes/taxes.module';
import { ProfilesModule } from './controllers/profiles/profiles.module';
import { Service } from './controllers/shipping/.service';
import { ShippingService } from './controllers/shipping/shipping.service';
import { ShippingModule } from './controllers/shipping/shipping.module';
import { BillingModule } from './controllers/billing/billing.module';
import { BrandsService } from './controllers/brands/brands.service';
import { BrandsModule } from './controllers/brands/brands.module';
import { CategoriesModule } from './controllers/categories/categories.module';
import { DiscountsService } from './controllers/discounts/discounts.service';
import { DiscountsModule } from './controllers/discounts/discounts.module';
import { OrderlinesModule } from './controllers/orderlines/orderlines.module';
import { OrderService } from './controllers/order/order.service';
import { OrderModule } from './controllers/order/order.module';
import { OrdersModule } from './controllers/orders/orders.module';


@Module({
  imports: [
    KnexModule.register({
      client: 'mysql2',
      connection: {
        host: 'localhost',
        user: 'root',
        password: 'Br@gap017',
        database: 'tico',
        port: 3306,
      },
      debug:true,
    }),
    UsersModule,
    ProductsModule,
    TaxesModule,
    ProfilesModule,
    ShippingModule,
    BillingModule,
    BrandsModule,
    CategoriesModule,
    DiscountsModule,
    OrderlinesModule,
    OrderModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProductsService, TaxesService, Service, ShippingService, BrandsService, DiscountsService, OrderService],
})
export class AppModule {}

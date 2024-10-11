import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { PhotoModule } from './photo/photo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DbModule,
    PhotoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

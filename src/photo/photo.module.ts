import { Module } from '@nestjs/common';
import { photoProviders } from './providers/photo.providers';
import { DbModule } from 'src/db/db.module';
import { PhotoTypeormRepository } from './repositories/photo.typeorm.repository';
import { FindManyPhotosService } from './use-cases/find-many-photo/find-many-photos.service';
import { FindManyPhotosController } from './use-cases/find-many-photo/find-many-photos.controller';

const PhotoRepositoryProvider = {
  provide: 'PhotoRepository',
  useClass: PhotoTypeormRepository,
};

@Module({
  controllers: [FindManyPhotosController],
  providers: [
    ...photoProviders,
    PhotoRepositoryProvider,
    FindManyPhotosService,
  ],
  imports: [DbModule],
})
export class PhotoModule {}

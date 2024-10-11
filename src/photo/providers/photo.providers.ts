import { DataSource } from 'typeorm';
import { Photo } from '../entities/photo.entity';

export const photoProviders = [
  {
    provide: 'PHOTO_REPOSITORY',
    useFactory: (databaSource: DataSource) => databaSource.getRepository(Photo),
    inject: ['DATA_SOURCE'],
  },
];

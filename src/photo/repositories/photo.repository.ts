import { Photo } from '../entities/photo.entity';

export interface PhotoRepository {
  findAll(): Promise<Photo[]>;
}

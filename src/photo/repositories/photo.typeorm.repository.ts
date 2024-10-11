import { Inject, Injectable } from '@nestjs/common';
import { Photo } from '../entities/photo.entity';
import { PhotoRepository } from './photo.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoTypeormRepository implements PhotoRepository {
  constructor(
    @Inject('PHOTO_REPOSITORY') private photoRepository: Repository<Photo>,
  ) {}
  findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
}

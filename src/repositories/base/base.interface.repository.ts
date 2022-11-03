import { DeleteResult } from 'typeorm';

export interface BaseInterfaceRepository<T> {

  create(entity: T | any): Promise<T>;

  findOneById(id: number): Promise<T>;

  findAll(): Promise<T[]>;

  remove(id: string): Promise<DeleteResult>;

  findByCondition(filterCondition: any): Promise<T>;
  
  findWithRelations(relations: any): Promise<T[]>;
  
}

import { DeleteResult, Repository } from "typeorm";
import { BaseInterfaceRepository } from "./base.interface.repository";


export abstract class BaseAbstractRepository<T> implements BaseInterfaceRepository<T> {
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  async create(entity: any): Promise<T> {
    return await this.entity.save(entity);
  }

  async findOneById(id: number): Promise<T> {
    // TODO: if the type of id is `number`, it will fail, but if change `any` then we got the successful result.
    return await this.entity.findOne(id);
  }

  async findAll(): Promise<T[]> {
    return await this.entity.find();
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.entity.delete(id);
  }

  async findByCondition(filterCondition: any): Promise<T> {
    return await this.entity.findOne({where: filterCondition});
  }
  
  async findWithRelations(relations: any): Promise<T[]> {
    return await this.entity.find(relations);
  }
}
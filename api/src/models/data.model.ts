import {Entity, model, property} from '@loopback/repository';

@model()
export class Data extends Entity {

  @property({
    id: true,
    generated: true
  })
  id: number;

  @property()
  type: number;

  @property()
  insert_date: Date;

  constructor(data?: Partial<Data>) {
    super(data);
  }
}

export interface DataRelations {
  // describe navigational properties here
}

export type DataWithRelations = Data & DataRelations;
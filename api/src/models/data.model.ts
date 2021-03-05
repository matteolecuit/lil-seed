import {Entity, model, property} from '@loopback/repository';

@model()
export class Data extends Entity {

  constructor(data?: Partial<Data>) {
    super(data);
  }
}

export interface DataRelations {
  // describe navigational properties here
}

export type DataWithRelations = Data & DataRelations;

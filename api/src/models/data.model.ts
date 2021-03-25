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

  @property({dataType: 'float'})
  data: number;

  @property({default: () => new Date()})
  insert_date: Date;

  @property({
    type: 'number',
  })
  potId: number;

  constructor(data?: Partial<Data>) {
    super(data);
  }
}

export interface DataRelations {
  // describe navigational properties here
}

export type DataWithRelations = Data & DataRelations;

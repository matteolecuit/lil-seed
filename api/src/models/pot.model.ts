import {Entity, hasMany, model, property} from '@loopback/repository';
import { Data } from './data.model';

@model()
export class Pot extends Entity {

  @property({
    id: true,
    generated: true
  })
  id: number;

  @property()
  name: string;

  @hasMany(() => Data)
  datas?: Data[];


  constructor(data?: Partial<Pot>) {
    super(data);
  }
}

export interface PotRelations {
  // describe navigational properties here
}

export type PotWithRelations = Pot & PotRelations;

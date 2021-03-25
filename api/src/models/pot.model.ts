import {Entity, hasMany, hasOne, model, property} from '@loopback/repository';
import {Data} from './data.model';
import { User } from './user.model';

@model()
export class Pot extends Entity {

  @property({
    id: true,
    generated: true
  })
  id: number;

  @property()
  name: string;

  @property()
  macAddress: string;

  @property({
    type: 'string',
  })
  userId?: string;

  @hasMany(() => Data)
  data: Data[];

  constructor(data?: Partial<Pot>) {
    super(data);
  }
}

export interface PotRelations {
  // describe navigational properties here
}

export type PotWithRelations = Pot & PotRelations;

import {Entity, hasMany, model, property} from '@loopback/repository';
import { Pot } from './pot.model';

@model({settings: {strict: false}})
export class User extends Entity {
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  @property({
    id: true,
    generated: true
  })
  id: number;

  @property() name: string;

  @property() firstName: string;

  @property() email: string;

  @property() password: string;

  @hasMany(() => Pot)
  pots?: Pot[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;

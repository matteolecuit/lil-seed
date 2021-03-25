import {Entity, hasMany, model, property} from '@loopback/repository';
import {Pot} from './pot.model';

@model()
export class User extends Entity {

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @hasMany(() => Pot)
  pots: Pot[];
  [prop: string]: any;

  @property({
    id: true,
  })
  username: string;

  @property() firstName: string;

  @property() password: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;

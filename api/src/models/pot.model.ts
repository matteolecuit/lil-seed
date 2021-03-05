import {Entity, model, property} from '@loopback/repository';

@model()
export class Pot extends Entity {

  constructor(data?: Partial<Pot>) {
    super(data);
  }
}

export interface PotRelations {
  // describe navigational properties here
}

export type PotWithRelations = Pot & PotRelations;

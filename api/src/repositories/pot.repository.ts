import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LilseedDbDataSource} from '../datasources';
import {Pot, PotRelations} from '../models';

export class PotRepository extends DefaultCrudRepository<
  Pot,
  typeof Pot.prototype.id,
  PotRelations
> {
  constructor(
    @inject('datasources.lilseed_db') dataSource: LilseedDbDataSource,
  ) {
    super(Pot, dataSource);
  }
}

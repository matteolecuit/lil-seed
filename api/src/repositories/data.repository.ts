import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LilseedDbDataSource} from '../datasources';
import {Data, DataRelations} from '../models';

export class DataRepository extends DefaultCrudRepository<
  Data,
  typeof Data.prototype.id,
  DataRelations
> {
  constructor(
    @inject('datasources.lilseed_db') dataSource: LilseedDbDataSource,
  ) {
    super(Data, dataSource);
  }
}

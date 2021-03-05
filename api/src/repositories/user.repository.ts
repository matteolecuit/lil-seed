import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LilseedDbDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.lilseed_db') dataSource: LilseedDbDataSource,
  ) {
    super(User, dataSource);
  }
}

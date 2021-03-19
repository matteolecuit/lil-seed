import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LilseedDbDataSource} from '../datasources';
import {User, UserRelations, Pot} from '../models';
import {PotRepository} from './pot.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly pots: HasManyRepositoryFactory<Pot, typeof User.prototype.username>;

  constructor(
    @inject('datasources.lilseed_db') dataSource: LilseedDbDataSource, @repository.getter('PotRepository') protected potRepositoryGetter: Getter<PotRepository>,
  ) {
    super(User, dataSource);
    this.pots = this.createHasManyRepositoryFactoryFor('pots', potRepositoryGetter,);
    this.registerInclusionResolver('pots', this.pots.inclusionResolver);
  }
}

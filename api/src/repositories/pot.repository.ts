import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LilseedDbDataSource} from '../datasources';
import {Pot, PotRelations, Data} from '../models';
import {DataRepository} from './data.repository';

export class PotRepository extends DefaultCrudRepository<
  Pot,
  typeof Pot.prototype.id,
  PotRelations
> {

  public readonly data: HasManyRepositoryFactory<Data, typeof Pot.prototype.id>;

  constructor(
    @inject('datasources.lilseed_db') dataSource: LilseedDbDataSource, @repository.getter('DataRepository') protected dataRepositoryGetter: Getter<DataRepository>,
  ) {
    super(Pot, dataSource);
    this.data = this.createHasManyRepositoryFactoryFor('data', dataRepositoryGetter,);
    this.registerInclusionResolver('data', this.data.inclusionResolver);
  }
}

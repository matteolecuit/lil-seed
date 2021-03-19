import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'lilseed_db',
  connector: 'mysql',
  url: 'mysql://root:root@localhost:8889/lilseed_db',
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'lilseed_db'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LilseedDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'lilseed_db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.lilseed_db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

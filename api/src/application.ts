import {AuthenticationBindings} from '@loopback/authentication';
import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import path from 'path';
import {MyAuthActionProvider, MyAuthBindings, MyAuthMetadataProvider, MyAuthStrategyProvider} from './auth';
import {MySequence} from './sequence';

export {ApplicationConfig};

export class ApiApplication extends BootMixin(
  RepositoryMixin(RestApplication),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    // this.component(AuthenticationComponent);
    this.bind(AuthenticationBindings.METADATA).toProvider(MyAuthMetadataProvider);
    this.bind(MyAuthBindings.STRATEGY).toProvider(MyAuthStrategyProvider);
    this.bind(AuthenticationBindings.AUTH_ACTION).toProvider(MyAuthActionProvider);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}

import {inject} from '@loopback/core';
import {
  get, Request,


  response,
  ResponseObject, RestBindings
} from '@loopback/rest';
import {secured, SecuredType} from '../auth';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }

  // Map to `GET /ping`
  @get('/ping')
  @response(200, PING_RESPONSE)
  ping(): object {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }

  // test endpoints here

  @get('/ping/is-authenticated')
  @secured(SecuredType.IS_AUTHENTICATED)
  testIsAuthenticated() {
    return {message: 'isAuthenticated: OK'};
  }

  @get('/ping/permit-all')
  @secured(SecuredType.PERMIT_ALL)
  testPermitAll() {
    return {message: 'permitAll: OK'};
  }

  @get('/ping/deny-all')
  @secured(SecuredType.DENY_ALL)
  testDenyAll() {
    return {message: 'denyAll: OK'};
  }

  @get('/ping/has-any-role')
  testHasAnyRole() {
    return {message: 'hasAnyRole: OK'};
  }

  @get('/ping/has-roles')
  testHasRoles() {
    return {message: 'hasRoles: OK'};
  }
}

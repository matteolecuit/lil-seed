import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
  Pot,
} from '../models';
import {UserRepository} from '../repositories';

export class UserPotController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/pots', {
    responses: {
      '200': {
        description: 'Array of User has many Pot',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pot)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Pot>,
  ): Promise<Pot[]> {
    return this.userRepository.pots(id).find(filter);
  }

  @post('/users/{id}/pots', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pot)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.username,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pot, {
            title: 'NewPotInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) pot: Omit<Pot, 'id'>,
  ): Promise<Pot> {
    return this.userRepository.pots(id).create(pot);
  }

  @patch('/users/{id}/pots', {
    responses: {
      '200': {
        description: 'User.Pot PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pot, {partial: true}),
        },
      },
    })
    pot: Partial<Pot>,
    @param.query.object('where', getWhereSchemaFor(Pot)) where?: Where<Pot>,
  ): Promise<Count> {
    return this.userRepository.pots(id).patch(pot, where);
  }

  @del('/users/{id}/pots', {
    responses: {
      '200': {
        description: 'User.Pot DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Pot)) where?: Where<Pot>,
  ): Promise<Count> {
    return this.userRepository.pots(id).delete(where);
  }
}

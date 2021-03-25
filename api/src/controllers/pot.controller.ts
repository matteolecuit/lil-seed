import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody,
  response
} from '@loopback/rest';
import {secured, SecuredType} from '../auth';
import {Pot} from '../models';
import {PotRepository} from '../repositories';

export class PotController {
  constructor(
    @repository(PotRepository)
    public potRepository: PotRepository,
  ) { }

  @post('/pots')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(200, {
    description: 'Pot model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pot)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pot, {
            title: 'NewPot',
            exclude: ['id'],
          }),
        },
      },
    })
    pot: Omit<Pot, 'id'>,
  ): Promise<Pot> {
    return this.potRepository.create(pot);
  }

  @get('/pots/count')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(200, {
    description: 'Pot model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Pot) where?: Where<Pot>,
  ): Promise<Count> {
    return this.potRepository.count(where);
  }

  @get('/pots')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(200, {
    description: 'Array of Pot model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pot, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Pot) filter?: Filter<Pot>,
  ): Promise<Pot[]> {
    return this.potRepository.find(filter);
  }

  @patch('/pots')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(200, {
    description: 'Pot PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pot, {partial: true}),
        },
      },
    })
    pot: Pot,
    @param.where(Pot) where?: Where<Pot>,
  ): Promise<Count> {
    return this.potRepository.updateAll(pot, where);
  }

  @get('/pots/{id}')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(200, {
    description: 'Pot model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pot, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pot, {exclude: 'where'}) filter?: FilterExcludingWhere<Pot>
  ): Promise<Pot> {
    return this.potRepository.findById(id, filter);
  }

  @patch('/pots/{id}')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(204, {
    description: 'Pot PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pot, {partial: true}),
        },
      },
    })
    pot: Pot,
  ): Promise<void> {
    await this.potRepository.updateById(id, pot);
  }

  @put('/pots/{id}')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(204, {
    description: 'Pot PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pot: Pot,
  ): Promise<void> {
    await this.potRepository.replaceById(id, pot);
  }

  @del('/pots/{id}')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(204, {
    description: 'Pot DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.potRepository.deleteById(id);
  }
}

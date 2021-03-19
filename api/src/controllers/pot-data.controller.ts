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
  Pot,
  Data,
} from '../models';
import {PotRepository} from '../repositories';

export class PotDataController {
  constructor(
    @repository(PotRepository) protected potRepository: PotRepository,
  ) { }

  @get('/pots/{id}/data', {
    responses: {
      '200': {
        description: 'Array of Pot has many Data',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Data)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Data>,
  ): Promise<Data[]> {
    return this.potRepository.data(id).find(filter);
  }

  @post('/pots/{id}/data', {
    responses: {
      '200': {
        description: 'Pot model instance',
        content: {'application/json': {schema: getModelSchemaRef(Data)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Pot.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Data, {
            title: 'NewDataInPot',
            exclude: ['id'],
            optional: ['potId']
          }),
        },
      },
    }) data: Omit<Data, 'id'>,
  ): Promise<Data> {
    return this.potRepository.data(id).create(data);
  }

  @patch('/pots/{id}/data', {
    responses: {
      '200': {
        description: 'Pot.Data PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Data, {partial: true}),
        },
      },
    })
    data: Partial<Data>,
    @param.query.object('where', getWhereSchemaFor(Data)) where?: Where<Data>,
  ): Promise<Count> {
    return this.potRepository.data(id).patch(data, where);
  }

  @del('/pots/{id}/data', {
    responses: {
      '200': {
        description: 'Pot.Data DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Data)) where?: Where<Data>,
  ): Promise<Count> {
    return this.potRepository.data(id).delete(where);
  }
}

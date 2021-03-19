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
import {Data} from '../models';
import {DataRepository} from '../repositories';

export class DataController {
  constructor(
    @repository(DataRepository)
    public dataRepository: DataRepository,
  ) { }

  @post('/data')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(200, {
    description: 'Data model instance',
    content: {'application/json': {schema: getModelSchemaRef(Data)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Data, {
            title: 'NewData',
            exclude: ['id'],
          }),
        },
      },
    })
    data: Omit<Data, 'id'>,
  ): Promise<Data> {
    return this.dataRepository.create(data);
  }

  @get('/data/count')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(200, {
    description: 'Data model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Data) where?: Where<Data>,
  ): Promise<Count> {
    return this.dataRepository.count(where);
  }

  @get('/data')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(200, {
    description: 'Array of Data model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Data, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Data) filter?: Filter<Data>,
  ): Promise<Data[]> {
    return this.dataRepository.find(filter);
  }

  @patch('/data')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(200, {
    description: 'Data PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Data, {partial: true}),
        },
      },
    })
    data: Data,
    @param.where(Data) where?: Where<Data>,
  ): Promise<Count> {
    return this.dataRepository.updateAll(data, where);
  }

  @get('/data/{id}')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(200, {
    description: 'Data model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Data, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Data, {exclude: 'where'}) filter?: FilterExcludingWhere<Data>
  ): Promise<Data> {
    return this.dataRepository.findById(id, filter);
  }

  @patch('/data/{id}')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(204, {
    description: 'Data PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Data, {partial: true}),
        },
      },
    })
    data: Data,
  ): Promise<void> {
    await this.dataRepository.updateById(id, data);
  }

  @put('/data/{id}')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(204, {
    description: 'Data PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() data: Data,
  ): Promise<void> {
    await this.dataRepository.replaceById(id, data);
  }

  @del('/data/{id}')
  @secured(SecuredType.IS_AUTHENTICATED)
  @response(204, {
    description: 'Data DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.dataRepository.deleteById(id);
  }
}

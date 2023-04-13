import { Request, Response } from 'express';

export const peopleControler = {

    list: async (req: Request, res: Response) => {

        res.status(200).json({ data: [{ id: 'uuid', full_name: 'Nome Completo1' }, { id: 'uuid', full_name: 'Nome Completo2' }], status: 200 });

        /*
            #swagger.auto = false
            #swagger.tags = ['People']
            #swagger.description = 'Endpoint para obter todos os registros'
    
            #swagger.parameters['authorization'] = {
                in: 'header',
                description: 'Token do usuário',
                required: true,
                type: 'string'
            }
            
            #swagger.responses[200] = { description: 'OK', schema: { data: [{id:'uuid', full_name: 'Nome Completo' }], status: 200 } }
            #swagger.responses[401] = { description: 'Não autorizado', schema: { $ref: '#/definitions/Error401' } }
            #swagger.responses[500] = { description: 'Erro interno do servidor', schema: { $ref: '#/definitions/Error500' } }
        */
    },

    create: async (req: Request, res: Response) => {

        res.status(200).json({ data: { id: 'uuid', full_name: 'Nome Completo' }, status: 200 });

        /*
            #swagger.auto = false
            #swagger.tags = ['People']
            #swagger.description = 'Endpoint para criar um novo registro pessoal'
    
            #swagger.parameters['authorization'] = {
                in: 'header',
                description: 'Token do usuário',
                required: true,
                type: 'string'
            }
    
            #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Informações para registro pessoal',
                schema: {
                    full_name: 'Nome completo',
                    email: 'user@mail.com',
                    password: 'password',
                    position: 'asp',
                    sex: 'M'
                },
                required: true,
                type: 'object'
            }
            
            #swagger.responses[200] = { description: 'OK', schema: { data: {id:'uuid', full_name: 'Nome Completo' }, status: 200 } }
            #swagger.responses[401] = { description: 'Não autorizado', schema: { $ref: '#/definitions/Error401' } }
            #swagger.responses[400] = { description: 'Parâmetros incorretos ou ausentes', schema: { errors:['Parâmetros incorretos ou ausentes'], status: 400 } }
            #swagger.responses[500] = { description: 'Erro interno do servidor', schema: { $ref: '#/definitions/Error500' } }
        */
    },

    update: async (req: Request, res: Response) => {

        res.status(200).json({ data: { id: 'uuid', full_name: 'Nome Completo' }, status: 200 });

        /*
            #swagger.auto = false
            #swagger.tags = ['People']
            #swagger.description = 'Endpoint para atualizar um registro'
    
            #swagger.parameters['authorization'] = {
                in: 'header',
                description: 'Token do usuário',
                required: true,
                type: 'string'
            }
    
            #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Informações para registro pessoal',
                schema: {
                    full_name: 'Nome completo',
                    email: 'user@mail.com',
                    password: 'password',
                    position: 'asp',
                    sex: 'M'
                },
                required: true,
                type: 'object'
            }
            
            #swagger.responses[200] = { description: 'OK', schema: { data: {id:'uuid', full_name: 'Nome Completo' }, status: 200 } }
            #swagger.responses[400] = { description: 'Parâmetros incorretos ou ausentes', schema: { errors:['Parâmetros incorretos ou ausentes'], status: 400 } }
            #swagger.responses[401] = { description: 'Não autorizado', schema: { $ref: '#/definitions/Error401' } }
            #swagger.responses[500] = { description: 'Erro interno do servidor', schema: { $ref: '#/definitions/Error500' } }
        */
    },

    delete: async (req: Request, res: Response) => {

        res.status(200).json({ data: 'Usuário deletado com sucesso', status: 200 });

        /*
            #swagger.auto = false
            #swagger.tags = ['People']
            #swagger.description = 'Endpoint para deletar um registro'
    
            #swagger.parameters['authorization'] = {
                in: 'header',
                description: 'Token do usuário',
                required: true,
                type: 'string'
            }
    
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'Id do registro a ser deletado',
                required: true,
                type: 'string'
            }
            
            #swagger.responses[200] = { description: 'OK', schema: { data: 'Usuário deletado com sucesso', status: 200 } }
            #swagger.responses[401] = { description: 'Não autorizado', schema: { $ref: '#/definitions/Error401' } }
            #swagger.responses[500] = { description: 'Erro interno do servidor', schema: { $ref: '#/definitions/Error500' } }
        */
    },
}

import { Request, Response } from 'express';

export const userControler = {
    authenticate: async (req: Request, res: Response) => {
        res.cookie('token', 'token_gerado_automaticamente')
        res.status(200).json({ data: { id: 'uuid', full_name: 'Nome Completo', token: 'token_gerado_automaticamente' }, status: 200 });

        /*
            #swagger.auto = false
            #swagger.tags = ['Users']
            #swagger.description = 'Endpoint para autenticar usuário'
    
            #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Email e senha do usuário',
                required: true,
                schema: {
                    email: 'user@mail.com',
                    password: 'password'
                },
                type: 'object'
            }
            
            #swagger.responses[200] = { description: 'OK', schema: { data: {id:'uuid', full_name: 'Nome Completo', token: 'token_gerado_automaticamente' }, status: 200 } }
            #swagger.responses[401] = { description: 'Credenciais incorretas', schema: { errors:['Credenciais incorretas'], status: 401 } }
            #swagger.responses[500] = { description: 'Erro interno do servidor', schema: { $ref: '#/definitions/Error500' } }
        */
    }
}

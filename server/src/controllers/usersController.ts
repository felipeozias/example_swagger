import { Request, Response } from 'express';

export const userControler = {
    authenticate: async (req: Request, res: Response) => {

        res.cookie('token', 'token_gerado_automaticamente')
        res.status(200).json({ data: { id: 'uuid', full_name: 'Nome Completo', token: 'token_gerado_automaticamente' }, status: 200 });

        /*
            #swagger.auto = false
            #swagger.tags = ['Users']
            #swagger.description = 'Endpoint to authenticate user'
            #swagger.parameters['object'] = { $ref: '#/components/schemas/users/reqBody' }
            
            #swagger.responses[200] = { description: 'Ok', schema: { $ref: '#/components/usersResponses200' } }
            #swagger.responses[401] = { description: 'Incorrect credentials', schema: { $ref: '#/components/usersResponses401' } }
            #swagger.responses[500] = { description: 'Internal server error', schema: { $ref: '#/components/error500' } }
        */
    }
}

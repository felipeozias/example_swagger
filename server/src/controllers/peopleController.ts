import { Request, Response } from 'express';

export const peopleControler = {

    list: async (req: Request, res: Response) => {

        res.status(200).json({ data: [{ id: 'uuid', full_name: 'Nome Completo1' }, { id: 'uuid', full_name: 'Nome Completo2' }], status: 200 });

        /*
           #swagger.auto = false
           #swagger.tags = ['People']
           #swagger.description = 'Endpoint to get all records'
           #swagger.parameters['authorization'] = { $ref: '#/components/schemas/people/authorization' }
           
           #swagger.responses[200] = { description: 'Ok', schema: { $ref: '#/components/peopleResponses200' } }
           #swagger.responses[401] = { description: 'Unauthorized', schema: { $ref: '#/components/error401' } }
           #swagger.responses[500] = { description: 'Internal server error', schema: { $ref: '#/components/error500' } }
       */
    },

    create: async (req: Request, res: Response) => {

        res.status(200).json({ data: { id: 'uuid', full_name: 'Nome Completo' }, status: 200 });

        /*
            #swagger.auto = false
            #swagger.tags = ['People']
            #swagger.description = 'Endpoint to create a new personal record'
            #swagger.parameters['authorization'] = { $ref: '#/components/schemas/people/authorization' }
            #swagger.parameters['object'] = { $ref: '#/components/schemas/people/reqBody' }
            
            #swagger.responses[200] = { description: 'Ok', schema: { $ref: '#/components/peopleResponses200' } }
            #swagger.responses[400] = { description: 'Incorrect or missing parameters', schema: { $ref: '#/components/peopleResponses400' } }
            #swagger.responses[401] = { description: 'Unauthorized', schema: { $ref: '#/components/error401' } }
            #swagger.responses[500] = { description: 'Internal server error', schema: { $ref: '#/components/error500' } }
        */
    },

    update: async (req: Request, res: Response) => {

        res.status(200).json({ data: { id: 'uuid', full_name: 'Nome Completo' }, status: 200 });

        /*
            #swagger.auto = false
            #swagger.tags = ['People']
            #swagger.description = 'Endpoint for updating a record'
            #swagger.parameters['authorization'] = { $ref: '#/components/schemas/people/authorization' }
            #swagger.parameters['object'] = { $ref: '#/components/schemas/people/reqBody' }
            
            #swagger.responses[200] = { description: 'Ok', schema: { $ref: '#/components/peopleResponses200' } }
            #swagger.responses[400] = { description: 'Incorrect or missing parameters', schema: { $ref: '#/components/peopleResponses400' } }
            #swagger.responses[401] = { description: 'Unauthorized', schema: { $ref: '#/components/error401' } }
            #swagger.responses[500] = { description: 'Internal server error', schema: { $ref: '#/components/error500' } }
        */
    },

    delete: async (req: Request, res: Response) => {

        res.status(200).json({ data: { id: 'uuid', full_name: 'Nome Completo' }, status: 200 });

        /*
            #swagger.auto = false
            #swagger.tags = ['People']
            #swagger.description = 'Endpoint to delete a record'
            #swagger.parameters['authorization'] = { $ref: '#/components/schemas/people/authorization' }
            #swagger.parameters['id'] = { $ref: '#/components/schemas/people/idParameter' }
            
            #swagger.responses[200] = { description: 'Ok', schema: { $ref: '#/components/peopleResponses200' } }
            #swagger.responses[401] = { description: 'Unauthorized', schema: { $ref: '#/components/error401' } }
            #swagger.responses[500] = { description: 'Internal server error', schema: { $ref: '#/components/error500' } }
        */
    },
}

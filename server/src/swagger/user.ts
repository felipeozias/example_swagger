export const userSwagger = {

    reqBody: {
        name: 'object',
        in: 'body',
        description: 'User email and password',
        required: true,
        schema: {
            properties: {
                email: {
                    type: 'string',
                    example: 'name@mail.com',
                },
                password: {
                    type: 'string',
                    example: '***',
                },
            },
        },
    },

    // responses200: {
    //     data: { id: 'uuid', full_name: 'Full name', token: 'token' },
    //     status: 200,
    // },

    responses200: {
        type: 'object',
        properties: {
            data: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        example: 'uuid'
                    },
                    full_name: {
                        type: 'string',
                        example: 'Full name'
                    },
                    token: {
                        type: 'string',
                        example: 'token'
                    }
                }
            },
            status: {
                type: 'number',
                example: 200
            }
        }
    },

    // responses401: {
    //     errors: ['Incorrect credentials'],
    //     status: 401,
    // },

    responses401: {
        type: 'object',
        properties: {
            errors: {
                type: 'array',
                example: ['Incorrect credentials'],
                items: { type: 'string' }
            },
            status: {
                type: 'number',
                example: 401
            }
        }
    },
}

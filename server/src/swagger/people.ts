export const peopleSwagger = {

    reqBody: {
        name: "object",
        in: "body",
        description: "Personal registration information",
        required: true,
        schema: {
            properties: {
                full_name: {
                    type: "string",
                    example: "Full name",
                },
                email: {
                    type: "string",
                    example: "name@mail.com",
                },
                password: {
                    type: "string",
                    example: "***",
                },
            },
        },
    },

    // responses200: {
    //     data: [{ id: 'uuid', full_name: 'Full name' }],
    //     status: 200,
    // },
    responses200: {
        type: 'object',
        properties: {
            data: {
                type: 'array',
                items: {
                    types: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            example: 'uuid'
                        },
                        full_name: {
                            type: 'string',
                            example: 'Full name'
                        }
                    }
                },
            },
            status: {
                type: 'number',
                example: 200
            }
        }
    },

    // responses400: {
    //     errors: ['Incorrect or missing parameters'],
    //     status: 400
    // },
    responses400: {
        type: 'object',
        properties: {
            errors: {
                type: 'array',
                example: ['Incorrect or missing parameters'],
                items: { type: 'string' }
            },
            status: {
                type: 'number',
                example: 400
            }
        }
    },

    idParameter: {
        name: "id",
        in: "path",
        description: "Id of the record to be deleted",
        required: true,
        type: "string",
    },

    authorization: {
        name: "authorization",
        in: "header",
        description: "User token",
        required: true,
        type: "string",
    },
}

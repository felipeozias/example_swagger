import swaggerAutogen from 'swagger-autogen';
import { peopleSwagger } from './swagger/people';
import { userSwagger } from './swagger/user';

const outputFile = './src/config/swagger.json';
const endpointsFiles = ['./src/server.ts'];

const swagger = swaggerAutogen({ lang: 'pt-br' });

const doc = {
    info: {
        version: '1.0.0',
        title: 'Alpha Minion',
        description: 'Documentation automatically generated by the <b>swagger-autogen</b> module.',
    },
    host: 'localhost:8888',
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Users',
            description: 'Endpoints to manage users',
        },
        {
            name: 'People',
            description: 'Endpoints to manage people',
        },
    ],

    definitions: {
        // peopleResponses200: peopleSwagger.responses200,
        // peopleResponses400: peopleSwagger.responses400,

        // usersResponses200: userSwagger.responses200,
        // usersResponses401: userSwagger.responses401,

        // error401: {
        //     errors: ['Unauthorized'],
        //     status: 401,
        // },
        // error500: {
        //     errors: ['Internal server error'],
        //     status: 500,
        // },
    },

    components: {
        schemas: {
            people: peopleSwagger,
            users: userSwagger,
        },

        peopleResponses200: peopleSwagger.responses200,
        peopleResponses400: peopleSwagger.responses400,

        usersResponses200: userSwagger.responses200,
        usersResponses401: userSwagger.responses401,

        // error401: {
        //     errors: ['Unauthorized'],
        //     status: 401,
        // },
        error401: {
            type: 'object',
            properties: {
                errors: {
                    type: 'array',
                    example: ['Unauthorized'],
                    items: { type: 'string' }
                },
                status: {
                    type: 'number',
                    example: 401
                }
            }
        },
        // error500: {
        //     errors: ['Internal server error'],
        //     status: 500,
        // },
        error500: {
            type: 'object',
            properties: {
                errors: {
                    type: 'array',
                    example: ['Internal server error'],
                    items: { type: 'string' }
                },
                status: {
                    type: 'number',
                    example: 500
                }
            }
        },
    },
}

swagger(outputFile, endpointsFiles, doc);

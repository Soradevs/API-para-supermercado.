import { FastifyInstance, FastifyPluginCallback } from 'fastify';

const IndexRoutes: FastifyPluginCallback = (fastify: FastifyInstance, options: any, done: () => void) => {
  fastify.get('/', async (request, reply) => {
    return 'Hello world';
  });

  done();
};

export default IndexRoutes;

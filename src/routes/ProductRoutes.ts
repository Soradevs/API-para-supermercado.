import { FastifyInstance, FastifyPluginCallback } from 'fastify';

const productRoutes: FastifyPluginCallback = (fastify: FastifyInstance, options: any, done: () => void) => {
  fastify.get('/', async (request, reply) => {
    return 'This action returns all products';
  });

  fastify.post('/products', async (request, reply) => {
    const body = request.body as { name: string; price: number };
    return `This action adds a new product with name: ${body.name} and price: ${body.price}`;
  });

  fastify.get('/products/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    return `This action returns a product with id: ${id}`;
  });

  done();
};

export default productRoutes;

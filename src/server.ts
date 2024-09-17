import fastify from "fastify";
import ProductRoutes from "./routes/ProductRoutes";
import IndexRoutes from "./routes/IndexRoutes";

require("dotenv").config();

const app = fastify({
  logger: false,
});

app.register(ProductRoutes, { prefix: "/product" });
app.register(IndexRoutes, { prefix: "/" });

const port = 3000;

const start = async () => {
  try {
    app.listen({ port }, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();
import swaggerJSDoc from "swagger-jsdoc";
import __dirname from "./projectDirname.js";

// Metadata info about our API

const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: "Hospital project API",
      description: "Documentacion oficial de Hospital project"
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
};

const specs = swaggerJSDoc(swaggerOptions)

export default specs
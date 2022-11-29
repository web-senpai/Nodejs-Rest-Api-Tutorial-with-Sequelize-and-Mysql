import swaggerAutogen from 'swagger-autogen'

const autogen = swaggerAutogen();

const doc = {
    host: "localhost:4000",

    definitions : {
      
    },
}

const outputFile = './dist-server/swagger.json'
const endpointsFiles = ['./server/routes/index.js']

autogen(outputFile, endpointsFiles, doc)
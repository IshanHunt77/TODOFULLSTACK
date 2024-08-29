const {z} = require('zod');

const schema = z.object({
    title: z.string(),
    description: z.string()
    
});

const idschema = z.object({
    id: z.string()
});

module.exports = {
    schema,
    idschema
};

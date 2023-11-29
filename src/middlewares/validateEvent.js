const Joi = require('joi');

function validarDatosJoi(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const mensaje = error.details.map((detail) => detail.message).join(', ');
      return res.status(400).json({ mensaje });
    }

    next();
  };
}

const eventoSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  dateEvent: Joi.date().required(),
  location: Joi.object({
    lat: Joi.number().required(),
    long: Joi.number().required(),
  }).required(),
  description: Joi.string().required(),
});

module.exports = { validarDatosJoi, eventoSchema };

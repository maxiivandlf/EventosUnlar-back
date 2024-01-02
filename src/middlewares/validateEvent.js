const Joi = require('joi');

function validateData(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const mensaje = error.details.map((detail) => detail.message).join(', ');
      return res.status(400).json({ mensaje });
    }

    next();
  };
}

const eventSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  dateEvent: Joi.date().iso().required(),
  lat: Joi.number().max(999999).required(),
  long: Joi.number().max(999999).required(),
  description: Joi.string().required(),
  imageURL: Joi.alternatives().try(
    Joi.binary(),
    Joi.string(),
    Joi.binary().encoding('base64'),
    Joi.string().pattern(new RegExp('^data:image/[a-zA-Z]+;base64,'))
  ),
});

module.exports = { validateData, eventSchema };

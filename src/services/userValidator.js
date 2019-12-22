import joi from '@hapi/joi';

const schema = joi.object({
    login: joi.string()
        .alphanum()
        .required(),

    password: joi.string()
        .alphanum()
        .required(),

    age: joi.number()
        .greater(3)
        .less(131)
        .required()
});

const validate = (req, res, next) => {
    const { error } = schema.validate(req.body, {
        allowUnknown: false
    });

    if (error && error.isJoi) {
        res.status(400).json({ message: 'not valid properties' });
    } else {
        // eslint-disable-next-line callback-return
        next();
    }
};

export default validate;

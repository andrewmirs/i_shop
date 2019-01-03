const validation = require('../../helpers/validation');

module.exports = ( req, res ) => {
    const { body: { firstName, lastName, email, password } } = req;

    try {
        const errors = [];

        // Backend validation for names
        if(!firstName){
            errors.push('Missing first name');
        } else if (!validation.name(firstName)){
            errors.push('First name can only be container a-z, no special characters allowed');
        }
        if(!lastName){
            errors.push('Missing last name');
        } else if (!validation.name(lastName)){
            errors.push('Last name can only be container a-z, no special characters allowed');
        }

        // Backend validation for email
        if(!email){
            errors.push('Missing email address');
        } else if(!validation.email(email)){
            errors.push('Invalid email address given. Must be in following format: example@mail.com');
        }
        
        // Backend validation for password
        if(!password){
            errors.push('Missing password');
        } else if (!validation.password(password)){
            errors.push('Invalid password. Must contain upper and lower case letters, at least one special character, a number, and be at leaast 8 characters long');
        }

        if(errors.length){
            return res.status(422).send({
                success: false,
                errors
            });
        }

        res.send({
            success: true,
            message: 'This is the sign up endpoint'
        });
    } catch(err){
        console.log('Sign Up Error:', err);

        res.status(500).send('Sign Up Failed');
    }
}
import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
    code: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    },
    capital: { 
        type: String, required: true
    },
    continent: {
         type: String, required: true
        },
    currency: { 
        type: String, required: true
    },
    languages: [
        {
            name: {
                type: String, required: true
            }
        }
    ]
},
{
    versionKey: false
});

const Country = mongoose.model('Country', countrySchema);

export default Country;
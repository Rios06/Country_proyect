import mongoose from 'mongoose';

const DB_URI = 'mongodb+srv://Paises:4910247Jr@cluster0.5ocwqrw.mongodb.net/';

const connect = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB: Conexión exitosa');
    } catch (err) {
        console.error('DB: Error de conexión:', err);
    }
};

connect();

export default connect;



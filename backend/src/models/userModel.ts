import mongoose, { Schema } from 'mongoose';

interface IUser {
    username: string;
    email: string;
    password: string;
    picture: string;
    status: string;
}

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Please enter your name '],
        },
        email: {
            type: String,
            required: [true, 'Please enter your email '],
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, 'Please enter your password '],
        },
        picture: {
            type: String,
            default:
                'https://res.cloudinary.com/dkd5jblv5/image/upload/v1675976806/Default_ProfilePicture_gjngnb.png',
        },
        status: {
            type: String,
            default: 'Hey there! I am using whatsapp',
        },
    },
    { timestamps: true, versionKey: false }
);

const userModel = mongoose.model<IUser>('user', userSchema);
export default userModel;

import mongoose, { Document, Model, Schema } from 'mongoose';

// Define the User interface
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role:string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Create the schema for the user model
const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
  }
);

// Add a check to avoid re-compiling the model in development
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;

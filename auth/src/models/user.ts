import { Model, model, Schema, Document } from "mongoose";

interface UserAttr {
  email: string;
  password: string;
}

interface UserModel extends Model<any> {
  build(attrs: UserAttr): UserDoc;
}

interface UserDoc extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttr) => {
  return new User(attrs);
};

const User = model<UserDoc, UserModel>("User", userSchema);

export { User };

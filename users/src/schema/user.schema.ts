import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  userId: User;
  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

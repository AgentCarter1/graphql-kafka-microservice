import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@InputType()
export class CreateUserInput {
  @Field()
  name: string;
}

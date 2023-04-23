import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;
  email: string;
  username: string;
  bio?: string;
  avatar?: string;
  active: boolean;
  createdat: Date;
  updatedat: Date;
}

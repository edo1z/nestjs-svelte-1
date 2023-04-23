import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  username: string;
  email: string;
}

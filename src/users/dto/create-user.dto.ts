import { ObjectType , Field } from '@nestjs/graphql'

@ObjectType ()
export class CreateUserDTO {
  @Field()
  name: string
}
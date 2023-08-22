/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsInt,
  IsDate,
  IsEnum,
} from "class-validator";
import { PetWhereUniqueInput } from "../../pet/base/PetWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumOrderStatus } from "./EnumOrderStatus";

@InputType()
class OrderUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  complete?: boolean;

  @ApiProperty({
    required: false,
    type: () => PetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PetWhereUniqueInput)
  @IsOptional()
  @Field(() => PetWhereUniqueInput, {
    nullable: true,
  })
  petId?: PetWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  shipDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "placed" | "approved" | "delivered";
}

export { OrderUpdateInput as OrderUpdateInput };
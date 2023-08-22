/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTagArgs } from "./CreateTagArgs";
import { UpdateTagArgs } from "./UpdateTagArgs";
import { DeleteTagArgs } from "./DeleteTagArgs";
import { TagCountArgs } from "./TagCountArgs";
import { TagFindManyArgs } from "./TagFindManyArgs";
import { TagFindUniqueArgs } from "./TagFindUniqueArgs";
import { Tag } from "./Tag";
import { PetFindManyArgs } from "../../pet/base/PetFindManyArgs";
import { Pet } from "../../pet/base/Pet";
import { TagService } from "../tag.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Tag)
export class TagResolverBase {
  constructor(
    protected readonly service: TagService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "read",
    possession: "any",
  })
  async _tagsMeta(
    @graphql.Args() args: TagCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Tag])
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "read",
    possession: "any",
  })
  async tags(@graphql.Args() args: TagFindManyArgs): Promise<Tag[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Tag, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "read",
    possession: "own",
  })
  async tag(@graphql.Args() args: TagFindUniqueArgs): Promise<Tag | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tag)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "create",
    possession: "any",
  })
  async createTag(@graphql.Args() args: CreateTagArgs): Promise<Tag> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tag)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "update",
    possession: "any",
  })
  async updateTag(@graphql.Args() args: UpdateTagArgs): Promise<Tag | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tag)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "delete",
    possession: "any",
  })
  async deleteTag(@graphql.Args() args: DeleteTagArgs): Promise<Tag | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Pet], { name: "pets" })
  @nestAccessControl.UseRoles({
    resource: "Pet",
    action: "read",
    possession: "any",
  })
  async resolveFieldPets(
    @graphql.Parent() parent: Tag,
    @graphql.Args() args: PetFindManyArgs
  ): Promise<Pet[]> {
    const results = await this.service.findPets(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
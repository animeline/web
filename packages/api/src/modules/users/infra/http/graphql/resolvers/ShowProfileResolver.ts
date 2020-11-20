import { Resolver, Query, Arg, Authorized } from "type-graphql";

import ShowProfileService from "@modules/users/services/ShowProfileService";

import ProfileSchema from "../schemas/Profile";

@Resolver(ProfileSchema)
class ShowProfileResolver {
  @Query(() => ProfileSchema, {
    name: "profile",
    description: "Shows user profile information",
  })
  @Authorized()
  async showProfile(@Arg("id") id: string) {
    const showProfileService = new ShowProfileService();    
    
    return await showProfileService.execute({ id });
  }
}

export default ShowProfileResolver;

import type { CustomUser } from "./CustomUser";

 export type CoreUsersPartialUpdatePathParams = {
    /**
     * @description A unique integer value identifying this user.
     * @type integer
    */
    id: number;
};

 export type CoreUsersPartialUpdate200 = CustomUser;

 export type CoreUsersPartialUpdateMutationRequest = Omit<NonNullable<CustomUser>, "id" | "profile_picture">;

 export type CoreUsersPartialUpdateMutationResponse = CustomUser;

 export type CoreUsersPartialUpdateMutation = {
    Response: CoreUsersPartialUpdateMutationResponse;
    Request: CoreUsersPartialUpdateMutationRequest;
    PathParams: CoreUsersPartialUpdatePathParams;
};
import type { CustomUser } from "./CustomUser";

 export type CoreUsersUpdatePathParams = {
    /**
     * @description A unique integer value identifying this user.
     * @type integer
    */
    id: number;
};

 export type CoreUsersUpdate200 = CustomUser;

 export type CoreUsersUpdateMutationRequest = Omit<NonNullable<CustomUser>, "id" | "profile_picture">;

 export type CoreUsersUpdateMutationResponse = CustomUser;

 export type CoreUsersUpdateMutation = {
    Response: CoreUsersUpdateMutationResponse;
    Request: CoreUsersUpdateMutationRequest;
    PathParams: CoreUsersUpdatePathParams;
};
import type { CustomUser } from "./CustomUser";

 export type CoreUsersCreate201 = CustomUser;

 export type CoreUsersCreateMutationRequest = Omit<NonNullable<CustomUser>, "id" | "profile_picture">;

 export type CoreUsersCreateMutationResponse = CustomUser;

 export type CoreUsersCreateMutation = {
    Response: CoreUsersCreateMutationResponse;
    Request: CoreUsersCreateMutationRequest;
};
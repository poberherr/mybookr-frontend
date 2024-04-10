import type { TokenRefresh } from "./TokenRefresh";

 export type ApiTokenRefreshCreate201 = TokenRefresh;

 export type ApiTokenRefreshCreateMutationRequest = Omit<NonNullable<TokenRefresh>, "access">;

 export type ApiTokenRefreshCreateMutationResponse = TokenRefresh;

 export type ApiTokenRefreshCreateMutation = {
    Response: ApiTokenRefreshCreateMutationResponse;
    Request: ApiTokenRefreshCreateMutationRequest;
};
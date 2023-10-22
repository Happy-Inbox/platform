/* eslint-disable @typescript-eslint/no-namespace */

export namespace GetCurrentUserRequest {

  interface SubscriptionDetails {
    name: string;
    delete_limit: number;
    block_limit: number;
  }

  export interface Response {
    id: number;
    photo_url: string | null;
    name: string | null;
    subscription: SubscriptionDetails;
  }
}
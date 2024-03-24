/* eslint-disable @typescript-eslint/no-namespace */

export namespace GetCurrentUserRequest {

  export interface SubscriptionDetails {
    name: string;
    isPremium: boolean;
    remaining: {
      delete: number;
      block: number;
    } | null;
    quota: {
      delete: number;
      block: number;
    } | null;
  }

  export interface Response {
    id: number;
    photo_url: string | null;
    name: string | null;
    subscription: SubscriptionDetails | null;
    delete_count: number;
  }
}
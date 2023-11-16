/* eslint-disable @typescript-eslint/no-namespace */

export namespace GetCurrentUserRequest {

  interface SubscriptionDetails {
    name: string;
    totals: {
      delete: number;
      block: number;
    };
    limits: {
      delete: number;
      block: number;
    }
  }

  export interface Response {
    id: number;
    photo_url: string | null;
    name: string | null;
    subscription: SubscriptionDetails;
  }
}
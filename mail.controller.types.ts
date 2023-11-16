import { InferSelectModel } from 'drizzle-orm';
import { emails } from 'drizzle/schema';
import { gmail_v1 } from 'googleapis';
import { tags } from 'typia';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace GetSenders {
  export interface SendersListItem {
    id: number;
    email: string;
    blocked: boolean;
    emails_count: number;
    imageUrl: string;
  }

  export interface QueryParams {
    // Skip items to fetch the next list of items in the list.
    skip_items?: number,
    sort_by?: 'emails_count' | 'email',
  }

  export interface Response {
    data: SendersListItem[];
  }
}

export namespace SyncRequest {
  export interface Response {
    success: boolean;
    message?: string;
  }
}

export namespace GetEmailsRequest {
  export interface Response {
    data: Omit<
      InferSelectModel<typeof emails>,
      'created_at'
    >[];
    count: number;
  }

  export interface QueryParams {
    // Start Date must be in YYYY-MM-DD format e.g 2023-12-26
    start?: string;
    // End Date must be in YYYY-MM-DD format e.g 2023-12-26
    end?: string;
    // Sort order -1 (descending) or 1 (ascending). Default is -1.
    sort_order?: -1 | 1,
    // Skip items to fetch the next list of items in the list.
    skip_items?: number,
  }
}

export namespace DeleteSenderRequest {
  export interface Response {
    success: boolean;
    message?: string;
  }
}

export namespace BlockSenderRequest {
  export interface Response {
    message?: string;
    remainingBlocks: number;
  }
}

export namespace GetEmailRequest {
  export interface Response {
    subject: string | null;
    previewText: string;
    mimeType: string;
    parts?: gmail_v1.Schema$MessagePart[];
    body?: gmail_v1.Schema$MessagePartBody;
  }
}

export namespace DeleteEmailRequest {
  export interface Response {
    success: boolean;
    message?: string;
  }

  export type DeleteEmailByIdsParams = {
    ids: (number & tags.Type<'int32'>)[] & tags.MinItems<1> & tags.MaxItems<100>;
  }

  export type DeleteEmailByRangeParams = {
    sender_id: number & tags.Type<'int32'>;
    // Start Date must be in YYYY-MM-DD format e.g 2023-12-26
    start_date: string;
    // End Date must be in YYYY-MM-DD format e.g 2023-12-26
    end_date: string;
  }

  export type QueryParams = DeleteEmailByIdsParams | DeleteEmailByRangeParams;
}

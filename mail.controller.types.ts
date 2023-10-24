import { InferSelectModel } from 'drizzle-orm';
import { emails } from 'drizzle/schema';
import { gmail_v1 } from 'googleapis';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace GetSenders {
  export interface SendersListItem {
    id: number;
    email: string;
    blocked: boolean;
    emails_count: number;
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
    data: Pick<
      InferSelectModel<typeof emails>,
      'originalDate' | 'previewText' | 'subject' | 'messageId'
    >[];
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
    parts: gmail_v1.Schema$MessagePart[];
  }
}

export namespace DeleteEmailRequest {
  export interface Response {
    success: boolean;
    email_id: number;
  }
}

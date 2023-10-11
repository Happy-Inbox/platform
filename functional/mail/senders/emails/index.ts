/**
 * @packageDocumentation
 * @module api.functional.mail.senders.emails
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

/**
 * @controller MailController.getEmails
 * @path GET /mail/senders/:senderId/emails
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getEmails(
    connection: IConnection,
    senderId: string,
): Promise<void> {
    return PlainFetcher.fetch(
        connection,
        {
            ...getEmails.METADATA,
            path: getEmails.path(senderId),
        } as const,
    );
}
export namespace getEmails {

    export const METADATA = {
        method: "GET",
        path: "/mail/senders/:senderId/emails",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (senderId: string): string => {
        return `/mail/senders/${encodeURIComponent(senderId ?? "null")}/emails`;
    }
}
/**
 * @packageDocumentation
 * @module api.functional.mail.senders.block
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { BlockSenderRequest } from "../../../../../src/controllers/mail/mail.controller.types";
import type { AuthorizationHeaders } from "../../../../../src/core.types";

/**
 * Block emails from a sender
 * 
 * @controller MailController.blockSender
 * @path PUT /mail/senders/:senderId/block
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function blockSender(
    connection: IConnection<blockSender.Headers>,
    senderId: number,
): Promise<blockSender.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...blockSender.METADATA,
            path: blockSender.path(senderId),
        } as const,
    );
}
export namespace blockSender {
    export type Headers = Resolved<AuthorizationHeaders>;
    export type Output = Primitive<BlockSenderRequest.Response>;

    export const METADATA = {
        method: "PUT",
        path: "/mail/senders/:senderId/block",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (senderId: number): string => {
        return `/mail/senders/${encodeURIComponent(senderId ?? "null")}/block`;
    }
}
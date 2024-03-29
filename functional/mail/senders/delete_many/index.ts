/**
 * @packageDocumentation
 * @module api.functional.mail.senders.delete_many
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { AuthorizationHeaders } from "../../../../core.types";
import type { DeleteSenderRequest, DeleteSendersRequest } from "../../../../mail.controller.types";

/**
 * Delete all emails from all senders
 * 
 * @controller MailController.deleteSenders
 * @path DELETE /mail/senders/delete-many
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function deleteSenders(
    connection: IConnection<deleteSenders.Headers>,
    query: deleteSenders.Query,
): Promise<deleteSenders.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...deleteSenders.METADATA,
            path: deleteSenders.path(query),
        } as const,
    );
}
export namespace deleteSenders {
    export type Headers = Resolved<AuthorizationHeaders>;
    export type Query = Resolved<DeleteSendersRequest.QueryParams>;
    export type Output = Primitive<DeleteSenderRequest.Response>;

    export const METADATA = {
        method: "DELETE",
        path: "/mail/senders/delete-many",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (query: deleteSenders.Query): string => {
        const variables: Record<any, any> = query as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/mail/senders/delete-many${encoded.length ? `?${encoded}` : ""}`;;
    }
}
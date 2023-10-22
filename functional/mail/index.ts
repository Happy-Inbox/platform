/**
 * @packageDocumentation
 * @module api.functional.mail
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { AuthorizationHeaders } from "../../core.types";
import type { DeleteEmailRequest, GetEmailRequest } from "../../mail.controller.types";

export * as sync from "./sync";
export * as senders from "./senders";

/**
 * Get a single email for full view
 * 
 * @controller MailController.getEmail
 * @path GET /mail/:emailId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getEmail(
    connection: IConnection<getEmail.Headers>,
    emailId: string,
): Promise<getEmail.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...getEmail.METADATA,
            path: getEmail.path(emailId),
        } as const,
    );
}
export namespace getEmail {
    export type Headers = Resolved<AuthorizationHeaders>;
    export type Output = Primitive<GetEmailRequest.Response>;

    export const METADATA = {
        method: "GET",
        path: "/mail/:emailId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (emailId: string): string => {
        return `/mail/${encodeURIComponent(emailId ?? "null")}`;
    }
}

/**
 * Delete a single email
 * 
 * @controller MailController.deleteEmail
 * @path DELETE /mail/:emailId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function deleteEmail(
    connection: IConnection<deleteEmail.Headers>,
    emailId: number,
): Promise<deleteEmail.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...deleteEmail.METADATA,
            path: deleteEmail.path(emailId),
        } as const,
    );
}
export namespace deleteEmail {
    export type Headers = Resolved<AuthorizationHeaders>;
    export type Output = Primitive<DeleteEmailRequest.Response>;

    export const METADATA = {
        method: "DELETE",
        path: "/mail/:emailId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (emailId: number): string => {
        return `/mail/${encodeURIComponent(emailId ?? "null")}`;
    }
}
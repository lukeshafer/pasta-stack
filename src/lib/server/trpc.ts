import { resolveHTTPResponse } from "@trpc/server/http";
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

const appRouter = router({
	user: router({
		getAll: publicProcedure.input(z.object({ name: z.string() })).query(({ input }) => {
			console.log("getUsers");
			console.log(input);
			return input.name;
		}),
	}),
});

/** ********* */
import type { APIContext } from "astro";
import type { HTTPHeaders } from "@trpc/client";

/**
 * Handles trpc query client requests.
 *
 * @param {APIContext} - Astro API Context
 * @returns {Promise<Response>} - trpc response
 */
export async function trpcServerHandler({ request, params, url }: APIContext): Promise<Response> {
	const query = url.searchParams;

	const requestBody = request.method === "GET" ? {} : await request.json() as Record<string, unknown>;

	const { status, headers, ...response } = await resolveHTTPResponse({
		createContext: () => Promise.resolve({}),
		router: appRouter,
		path: params.trpc as string,
		req: {
			query,
			method: request.method,
			headers: request.headers as unknown as HTTPHeaders,
			body: requestBody,
		},
	});

	return new Response(response.body, {
		headers: headers as HeadersInit,
		status,
	});
}

export type AppRouter = typeof appRouter;

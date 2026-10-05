import type { RequestHandler } from 'msw'

// Default API handlers shared by every test; individual tests override them with server.use().
export const handlers: RequestHandler[] = []

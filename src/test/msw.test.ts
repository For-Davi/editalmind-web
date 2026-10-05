import { http, HttpResponse } from 'msw'
import { describe, expect, it } from 'vitest'

import { server } from '@/test/msw/server'

describe('MSW test server', () => {
  it('serves responses from handlers registered by a test', async () => {
    server.use(http.get('http://api.test/health', () => HttpResponse.json({ status: 'ok' })))

    const response = await fetch('http://api.test/health')

    expect(await response.json()).toEqual({ status: 'ok' })
  })

  it('rejects requests that have no handler', async () => {
    await expect(fetch('http://api.test/unmocked')).rejects.toThrow()
  })
})

import browserFetchMock from './browser-fetch-mock'

jest.setTimeout(100000)

describe(
  'localhost:3000',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.evaluateOnNewDocument(() => window._routes = { hello: { result: 'goodbye' } })
      await page.evaluateOnNewDocument(browserFetchMock)
      await page.goto('http://localhost:3000/')
    }, 100000)

    test('should contain goodbye', async () => {
      const text = await page.evaluate(() => window.document.getElementById('res').textContent)
      expect(text).toContain('goodbye')
    })
  },
)

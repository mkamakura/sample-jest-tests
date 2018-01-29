const browserFetchMock = () => {
  const _fetch = window.fetch
  window.fetch = (url) => {
    const route = Object.keys(window._routes).find((route) => url.includes(route))
    return route
      ? new Promise((r1) => {
        r1({
          json: () => new Promise((r2) => r2(window._routes[route])),
        })
      })
      : _fetch(url)
  }
}

module.exports = browserFetchMock
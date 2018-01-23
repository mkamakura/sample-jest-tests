import assert from 'assert'
import { get_user_agent, get_search } from '../src/browser'

Object.defineProperty(window.navigator, "userAgent", ((_value) => {
  return {
    get: function _get() {
      return _value;
    },
    set: function _set(v) {
      _value = v;
    }
  }
})(window.navigator.userAgent))

test('browser: get user agent', () => {
  window.navigator.userAgent = 'Chrome'
  assert.equal(get_user_agent(), 'Chrome')
})

test('browser: get search', () => {
  jsdom.reconfigure({
    url: "https://www.example.com?date=20180101"
  })
  assert.deepEqual(get_search(), { date: '20180101' })
})
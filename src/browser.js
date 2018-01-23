export function get_user_agent() {
  return window.navigator.userAgent
}

export function get_search() {
  return window.location.search
    .slice(1)
    .split("&")
    .map(p => p.split("="))
    .reduce((obj, [k, v]) => ({ ...obj, [k]: v }), {})
}

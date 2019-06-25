import redirects from '~/static/301.json'

export default function({ route }) {
  const redirect = redirects.find(r => r.from === route.path)
  if (redirect) {
    return redirect.to
  }
}

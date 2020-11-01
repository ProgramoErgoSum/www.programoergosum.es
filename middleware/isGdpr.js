export default function({ store, redirect }) {
  if (store.state.gdpr === 'canceled') {
    return redirect('/legal/cookies')
  }
}

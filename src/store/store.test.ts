import store from './store'

test('that images initial value is []', () => {
  expect(Array.isArray([store.images])).toBe(true)
})

test('that setLoading sets right value', () => {
  store.setLoading(true)

  expect(store.isLoading).toBe(true)
})

test('that fetchImages updates store.images', () => {
  store.fetchImages().then(res => {
    expect(store.images).toBe(res)
  })
})

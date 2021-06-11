import handleFormatBalance from '../handlers/handleFormatBalance'

test('Removes any non-numeric values or uninformative zeros', () => {
  const formattedBalance = handleFormatBalance('123swe')
  expect(formattedBalance).toBe(123);

  const zeroFormattedBalance = handleFormatBalance('0001234')
  expect(zeroFormattedBalance).toBe(1234);

});
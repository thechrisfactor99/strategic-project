import handleValidateDebt from '../handlers/handleValidateDebt'



const testEntrySuccess = {creditor: "Bank1", firstName: "Chris", lastName: "Anwander",
		minPay: 5, balance: 1000}

test('Successfully submits a valid debt entry', () => {
  const debtSuccess = handleValidateDebt(testEntrySuccess)
  expect(debtSuccess.status).toBe('Success');
});

const testEntryFail1 = {creditor: "", firstName: "Chris", lastName: "Anwander",
		minPay: 5, balance: 1000}

const testEntryFail2 = {creditor: "", firstName: "Chris", lastName: "Anwander",
		minPay: 0, balance: 1000}

const testEntryFail3 = {creditor: "", firstName: "Chris", lastName: "Anwander",
		minPay: 10, balance: 0}

test('Rejects invalid debt entries with helper text', () => {
  const error1 = handleValidateDebt(testEntryFail1)
  expect(error1.status).toBe('Error');
  expect(error1.message).toBe("Fields can't be empty.");

  const error2 = handleValidateDebt(testEntryFail2)
  expect(error2.status).toBe('Error');
  expect(error2.message).toBe("Minimum Payment % must be greater than 0.");


  const error3 = handleValidateDebt(testEntryFail3)
  expect(error3.status).toBe('Error');
  expect(error3.message).toBe("Balance must be greater than 0.");

});
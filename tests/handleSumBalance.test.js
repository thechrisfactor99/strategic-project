import handleSumBalance from '../handlers/handleSumBalance'

const testSingleBalance = [
  {
    "id": 1,
    "checked": false,
    "creditorName": "CBNA",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 2.00,
    "balance": 1363.00
  }
]

const testList = [
	  {
	    "id": 1,
	    "checked": false,
	    "creditorName": "CBNA",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 2.00,
	    "balance": 1363.00
	  },
	  {
	    "id": 2,
	    "checked": true,
	    "creditorName": "AMEX",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 2.00,
	    "balance": 2763.00
	  },
	  {
	    "id": 3,
	    "checked": true,
	    "creditorName": "AMEX",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 2.00,
	    "balance": 429.00
	  },
	  {
	    "id": 4,
	    "checked": false,
	    "creditorName": "AMEX",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 2.00,
	    "balance": 1363.00
	  },
	  {
	    "id": 5,
	    "checked": true,
	    "creditorName": "DISCOVERBANK",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 2.00,
	    "balance": 2644.00
	  },
	  {
	    "id": 6,
	    "checked": false,
	    "creditorName": "CAPITAL ONE",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 4.00,
	    "balance": 5464.00
	  },
	  {
	    "id": 7,
	    "checked": false,
	    "creditorName": "CAPITAL ONE",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 4.00,
	    "balance": 2345.00
	  },
	  {
	    "id": 8,
	    "checked": false,
	    "creditorName": "CAPITAL ONE",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 4.00,
	    "balance": 836.00
	  },
	  {
	    "id": 9,
	    "checked": true,
	    "creditorName": "CBNA",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 3.50,
	    "balance": 687.00
	  },
	  {
	    "id": 10,
	    "creditorName": "CBNA",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 3.50,
	    "balance": 235.00
	  }
	]

const removeList1 = [
	  {
	    "id": 1,
	    "creditorName": "CBNA",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 2.00,
	    "balance": 1363.00
	  },
	  {
	    "id": 2,
	    "creditorName": "AMEX",
	    "firstName": "Suman",
	    "lastName": "Tester79",
	    "minPaymentPercentage": 2.00,
	    "balance": 2763.00
	  }
	]


test('Sums all checked balances correctly', () => {
  const testMultipleBalances = handleSumBalance(testList)
  expect(testMultipleBalances).toEqual(18129);

  const testOneBalance = handleSumBalance(testSingleBalance)
  expect(testOneBalance).toEqual(1363)
});
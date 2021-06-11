/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDebt = /* GraphQL */ `
  mutation CreateDebt(
    $input: CreateDebtInput!
    $condition: ModelDebtConditionInput
  ) {
    createDebt(input: $input, condition: $condition) {
      id
      creditor
      firstName
      lastName
      minPayPerc
      balance
      createdAt
      updatedAt
    }
  }
`;
export const updateDebt = /* GraphQL */ `
  mutation UpdateDebt(
    $input: UpdateDebtInput!
    $condition: ModelDebtConditionInput
  ) {
    updateDebt(input: $input, condition: $condition) {
      id
      creditor
      firstName
      lastName
      minPayPerc
      balance
      createdAt
      updatedAt
    }
  }
`;
export const deleteDebt = /* GraphQL */ `
  mutation DeleteDebt(
    $input: DeleteDebtInput!
    $condition: ModelDebtConditionInput
  ) {
    deleteDebt(input: $input, condition: $condition) {
      id
      creditor
      firstName
      lastName
      minPayPerc
      balance
      createdAt
      updatedAt
    }
  }
`;

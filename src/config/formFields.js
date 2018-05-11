export default {
    "traditional-mortgage": {
      1: {
        firstName: {
          type: 'text',
          value: '',
          defaultValue: 'First Name',
          label: 'First Name',
          validation: 'required',
        },
        middleName: {
          type: 'text',
          value: '',
          defaultValue: 'Middle Name (optional)',
          label: 'Middle Name',
        },
        lastName: {
          type: 'text',
          value: '',
          defaultValue: 'Last Name',
          label: 'Last Name',
          validation: 'required',
        },
        suffix: {
          type: 'text',
          value: '',
          defaultValue: 'Suffix (optional)',
          label: 'Suffix',
        },
        email: {
          type: 'email',
          value: '',
          defaultValue: 'Email',
          label: 'Email',
          validation: 'required',
        },
        preferredPhone: {
          type: 'telMultiSelect',
          value: '',
          defaultValue: 'Preferred Phone',
          label: 'Suffix',
          validation: 'required',
          values: [
            {value: 'home', label: 'Home'},
            {value: 'cell', label: 'Cell'},
            {value: 'work', label: 'Work'},
            {value: 'other', label: 'Other'},
          ],
        },
        maritalStatus: {
          type: 'selectOption',
          value: '',
          defaultValue: 'Select One',
          label: 'Marital Status',
          validation: 'required',
          values: [
            {value: 'married', label: 'Married'},
            {value: 'separated', label: 'Separated'},
            {value: 'unmarried', label: 'Unmarried'},
          ],
        },
        addCoBorrower: {
          type: 'radio',
          value: '',
          defaultValue: 'Add a Co-Borrower?',
          label: 'Add a Co-Borrower?',
          values: [
            {value: 'yes', label: 'Yes'},
            {value: 'no', label: 'No'},
          ]
        },
      },
      2: {
        bank: {
          type: 'selectOption',
          value: '',
          defaultValue: 'Select One',
          label: 'Bank Name',
          validation: 'required',
          values: [
            {value: 'wellsFargo', label: 'Wells Fargo'},
            {value: 'bofa', label: 'Bank of America'},
            {value: 'citigroup', label: 'Citigroup'},
            {value: 'usbanCorp', label: 'U.S. Bancorp'},
            {value: 'morganStanley', label: 'Morgan Stanley'},
            {value: 'goldmanSachs', label: 'Goldman Sachs'},
            {value: 'other', label: 'Other'},
          ]
        },
        accountType: {
          type: 'selectOption',
          value: '',
          defaultValue: 'Select One',
          label: 'Account Type',
          validation: 'required',
          values: [
            {value: 'checking', label: 'Checking'},
            {value: 'savings', label: 'Savings'},
            {value: 'moneyMarket', label: 'Money Market'},
            {value: 'ira', label: 'IRA'},
          ]
        },
        balance: {
          type: 'text',
          value: '',
          defaultValue: 'Balance',
          label: 'Balance',
          validation: 'required',
        }
      },
      3: {
        test: {
          type: 'input',
          value: '',
          defaultValue: 'page 3',
          label: 'Page 3',
        }
      },
    },
    "reverse-mortgage": {},
    "private-company-mortgage": {},
}

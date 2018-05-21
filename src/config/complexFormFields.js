export default {
    "traditional-mortgage": {
      1: {
        headerHTML: '',
        section: {
          label: '1a. Personal Information',
          subSection: {
            groups: {
              group: {
                align: 'left',
                width: '60%',
                1: {
                  type: 'text',
                  value: '',
                  defaultValue: '',
                  label: '<strong>Name</strong> (First, Middle, Last, Suffix)',
                  validation: [{'required': 'Name is Required'}],
                  align: 'left',
                  width: '100%',
                },
                2: {
                  type: 'text',
                  value: '',
                  defaultValue: '',
                  label: '<strong>Alternate Names</strong> - List any name by which you are known or any names under which credit was previously received (First, Middle, Last, Suffix)',
                  validation: [],
                  align: 'left',
                  width: '100%',
                },
              },
              group: {
                align: 'right',
                width: '40%',
                1: {
                  type: 'text',
                  value: '',
                  defaultValue: '',
                  label: '<strong>Name</strong> (First, Middle, Last, Suffix)',
                  validation: [{'required': 'Name is Required', 'matches': '^[0-9]*$'}],
                  align: 'left',
                  width: '100%',
                },
                2: {

                },
              },
            },
          },
          subSection: {
            align: 'right',
            width: '40%',
            group: {
              1: {

              }
            }
          }
        }
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
    },
    "reverse-mortgage": {},
    "private-company-mortgage": {},
}

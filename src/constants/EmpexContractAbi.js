module.exports = {
  EmpexAbi:
  [
    {
      "constant": false,
      "inputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "email",
          "type": "string"
        },
        {
          "name": "phoneNumber",
          "type": "string"
        },
        {
          "name": "empAddress",
          "type": "string"
        },
        {
          "name": "careerStartDate",
          "type": "string"
        }
      ],
      "name": "createEmployee",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "employeeEmail",
          "type": "string"
        },
        {
          "name": "organizationName",
          "type": "string"
        },
        {
          "name": "startDate",
          "type": "string"
        },
        {
          "name": "endDate",
          "type": "string"
        },
        {
          "name": "isCurrentlyEmployed",
          "type": "bool"
        },
        {
          "name": "designation",
          "type": "string"
        },
        {
          "name": "confirmedDate",
          "type": "string"
        },
        {
          "name": "confirmedPersonName",
          "type": "string"
        },
        {
          "name": "confirmationNote",
          "type": "string"
        }
      ],
      "name": "createExperience",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "registrationId",
          "type": "string"
        },
        {
          "name": "email",
          "type": "string"
        },
        {
          "name": "phoneNumber",
          "type": "string"
        },
        {
          "name": "orgAddress",
          "type": "string"
        }
      ],
      "name": "createOrganization",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "searchEmail",
          "type": "string"
        }
      ],
      "name": "getEmployee",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "searchName",
          "type": "string"
        }
      ],
      "name": "getOrganization",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "searchedEmployeeIndex",
          "type": "int256"
        },
        {
          "name": "startDateInput",
          "type": "string"
        },
        {
          "name": "endDateInput",
          "type": "string"
        },
        {
          "name": "isCurrentlyEmployedInput",
          "type": "bool"
        }
      ],
      "name": "indexedExperience",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "employeeEmailInput",
          "type": "string"
        },
        {
          "name": "startDateInput",
          "type": "string"
        },
        {
          "name": "endDateInput",
          "type": "string"
        },
        {
          "name": "isCurrentlyEmployedInput",
          "type": "bool"
        }
      ],
      "name": "retrieveExperience",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "bool"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "searchEmail",
          "type": "string"
        }
      ],
      "name": "searchEmployee",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "employeeId",
          "type": "int256"
        },
        {
          "name": "startDate",
          "type": "string"
        },
        {
          "name": "endDate",
          "type": "string"
        },
        {
          "name": "isCurrentlyEmployed",
          "type": "bool"
        }
      ],
      "name": "searchExperience",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        },
        {
          "name": "",
          "type": "bool"
        },
        {
          "name": "",
          "type": "bool"
        },
        {
          "name": "",
          "type": "bool"
        },
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "searchName",
          "type": "string"
        }
      ],
      "name": "searchOrganization",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "inputId",
          "type": "int256"
        }
      ],
      "name": "searchOrganizationById",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
}

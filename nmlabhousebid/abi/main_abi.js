var nmlabHouseBidABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "projects",
        "outputs": [
            {
                "name": "deadline",
                "type": "uint256"
            },
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "projInfo",
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
                "name": "_bidder",
                "type": "address"
            }
        ],
        "name": "getProjectsByBidder",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
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
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "bids",
        "outputs": [
            {
                "name": "bidInfo",
                "type": "string"
            },
            {
                "name": "bidder",
                "type": "address"
            },
            {
                "name": "companyName",
                "type": "string"
            },
            {
                "name": "amount",
                "type": "uint256"
            },
            {
                "name": "accepted",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_itemType",
                "type": "string"
            }
        ],
        "name": "getProjectsByType",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isOwner",
        "outputs": [
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
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "getProjectsByOwner",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_projId",
                "type": "uint256"
            }
        ],
        "name": "getProjectInfo",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
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
                "components": [
                    {
                        "name": "projId",
                        "type": "uint256"
                    },
                    {
                        "name": "determined",
                        "type": "bool"
                    },
                    {
                        "name": "itemName",
                        "type": "string"
                    },
                    {
                        "name": "itemType",
                        "type": "string"
                    },
                    {
                        "name": "itemInfo",
                        "type": "string"
                    },
                    {
                        "name": "budget",
                        "type": "uint256"
                    }
                ],
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "projInfo",
                "type": "string"
            },
            {
                "components": [
                    {
                        "name": "projId",
                        "type": "uint256"
                    },
                    {
                        "name": "determined",
                        "type": "bool"
                    },
                    {
                        "name": "itemName",
                        "type": "string"
                    },
                    {
                        "name": "itemType",
                        "type": "string"
                    },
                    {
                        "name": "itemInfo",
                        "type": "string"
                    },
                    {
                        "name": "budget",
                        "type": "uint256"
                    }
                ],
                "indexed": false,
                "name": "items",
                "type": "tuple[]"
            }
        ],
        "name": "ProjectSubmitted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "ids",
                "type": "uint256[2]"
            },
            {
                "indexed": false,
                "name": "bidder",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "BidPlaced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "ids",
                "type": "uint256[2]"
            },
            {
                "indexed": false,
                "name": "bidder",
                "type": "address"
            }
        ],
        "name": "BidAccepted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    }
]
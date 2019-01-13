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
        "constant": false,
        "inputs": [
            {
                "name": "_projId",
                "type": "uint256"
            },
            {
                "name": "_itemName",
                "type": "string"
            },
            {
                "name": "_itemType",
                "type": "string"
            },
            {
                "name": "_itemInfo",
                "type": "string"
            }
        ],
        "name": "addNewItem",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_bidId",
                "type": "uint256"
            }
        ],
        "name": "getBidInfo",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
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
                "type": "address"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
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
        "constant": false,
        "inputs": [
            {
                "name": "_bidId",
                "type": "uint256"
            }
        ],
        "name": "acceptBid",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
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
                "name": "projId",
                "type": "uint256"
            },
            {
                "name": "itemId",
                "type": "uint256"
            },
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
                "name": "price",
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
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_projInfo",
                "type": "string"
            }
        ],
        "name": "createProject",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
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
        "constant": false,
        "inputs": [
            {
                "name": "_projId",
                "type": "uint256"
            },
            {
                "name": "_itemId",
                "type": "uint256"
            },
            {
                "name": "_bidInfo",
                "type": "string"
            },
            {
                "name": "_companyName",
                "type": "string"
            },
            {
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "createBid",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
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
                "name": "_bidder",
                "type": "address"
            }
        ],
        "name": "getBiddingsByBidder",
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
                "name": "projId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "itemId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "bidder",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "price",
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
                "name": "projId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "itemId",
                "type": "uint256"
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
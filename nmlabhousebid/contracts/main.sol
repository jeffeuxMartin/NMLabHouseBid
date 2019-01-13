pragma solidity ^0.5.2;
pragma experimental ABIEncoderV2;

import "./ownable.sol";

contract ProjectFactory is Ownable {

  // events for tracking
  event ProjectSubmitted(uint id, string name);
  event BidPlaced(uint projId, uint itemId, address bidder, uint price);
  event BidAccepted(uint projId, uint itemId, address bidder);

  // constants
  uint defaultDuration = 14 days;

  // structs
  /**
  * Attributes of struct Project:
  * deadline: deadline of the project, which by default is 2 weeks after creation
  * name: the title of the project
  * projInfo: information about the project
  * items: represents requirements/work to do in the project
  */
  struct Project {
    uint deadline;
    string name;
    string projInfo;
    Item[] items;
  }

  /**
  * Attributes of struct Item:
  * projId: the project id which this item belongs to
  * determined: shows whether this item is assigned to a bid winner.
  * itemName: name of the item
  * itemType: type of the item
  * itemInfo: more information regarding to the item
  * budget: the project owner's budget for this item
  */
  struct Item {
    uint projId;
    string itemName;
    string itemType;
    string itemInfo;
  }

  /**
  * Attributes of struct Bid:
  * projId: to which project this bid is for
  * itemId: to which item this bid is for
  * bidInfo: infomation on this bid
  * bidder: address of the bidder
  * companyName: name of the company associated with the bidder
  * price: price for this bid
  * accepted: whether this is the winning bid
  */
  struct Bid {
    uint projId;
    uint itemId;
    string bidInfo;
    address bidder;
    string companyName;
    uint price;
    bool accepted;
  }

  // mappings
  Project[] public projects;
  Bid[] public bids;
  // string public username;
  // bool tender;

  mapping (uint => address) projectToOwner;
  mapping (address => uint) ownerProjectCount;
  mapping (address => uint) bidderBidCount;

  // functions
  modifier ownerOf(uint _projectId) {
    require (msg.sender == projectToOwner[_projectId]);
    _;
  }

  /**
  * _createProject creates a Project object.
  */
  function createProject(string memory _name, string memory _projInfo) public {
    uint id = projects.length;
    Project storage project = projects[id];
    project.deadline = uint32(now + defaultDuration);
    project.name = _name;
    project.projInfo = _projInfo;
    projectToOwner[id] = msg.sender;
    ownerProjectCount[msg.sender]++;
    emit ProjectSubmitted(id, _name);
  }

  /**
  * addNewItem creates an Item object.
  */
  function addNewItem(uint _projId, string memory _itemName, string memory _itemType, string memory _itemInfo) public {
    projects[_projId].items.push(Item(_projId, _itemName, _itemType, _itemInfo));
  }



  /**
  * placeBid places a bid by the bidder.
  */
  function placeBid(uint _projId, uint _itemId, string memory _bidInfo, address _bidder, string memory _companyName, uint _price) internal returns (bool) {
    if ((_price <= 0 || (now > projects[_projId].deadline))) return false;
    bids.push(Bid(_projId, _itemId, _bidInfo, _bidder, _companyName, _price, false));
    bidderBidCount[_bidder]++;
    emit BidPlaced(_projId, _itemId, _bidder, _price);
    return true;
  }

  function createBid(uint _projId, uint _itemId, string memory _bidInfo, string memory _companyName, uint _price) public returns (bool) {
    return placeBid(_projId, _itemId, _bidInfo, msg.sender, _companyName, _price);
  }

  /**
  * acceptBid accepts a bid on the item and updates the item's state
  */
  function _acceptBid(uint _bidId) internal ownerOf(bids[_bidId].projId) returns (bool) {
    require(!bids[_bidId].accepted);
    bids[_bidId].accepted = true;
    emit BidAccepted(bids[_bidId].projId, bids[_bidId].itemId, bids[_bidId].bidder);
    return true;
  }

  function acceptBid(uint _bidId) public returns (bool) {
    return _acceptBid(_bidId);
  }

  /**
  * getProjectInfo returns information of a project.
  * You can call this function in a loop to pull info of all the projects.
  */
  function getProjectInfo(uint _projId) public view returns (uint, string memory, string memory, Item[] memory) {
      Project memory project = projects[_projId];
      return (project.deadline, project.name, project.projInfo, project.items);
  }

  function getBidInfo(uint _bidId) public view returns (uint, uint, string memory, address, string memory, uint, bool) {
      Bid memory bid = bids[_bidId];
      return (bid.projId, bid.itemId, bid.bidInfo, bid.bidder, bid.companyName, bid.price, bid.accepted);
  }


  /**
  * getProjectsByOwner returns a list of project ids belonging to a specific user.
  * The owner of the project is the user who created the project.
  */
  function getProjectsByOwner(address _owner) external view returns (uint[] memory) {
    uint[] memory result = new uint[](ownerProjectCount[_owner]);
    uint counter = 0;
    for (uint i = 0; i < projects.length; i++) {
      if (projectToOwner[i] == _owner) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }

  /**
  * getBiddingsByBidder returns a list of bid ids which belongs to a specific bidder.
  */
  function getBiddingsByBidder(address _bidder) external view returns (uint[] memory ) {
    uint[] memory result = new uint[](bidderBidCount[_bidder]);
    uint counter = 0;
    for (uint i = 0; i < bids.length; i++) {
      if (bids[i].bidder == _bidder) {
          result[counter] = bids[i].projId;
          counter++;
      }
    }
    return result;
  }

  /**
  * getProjectsByType returns a list of project ids which contains items of given itemType.
  */
  function getProjectsByType(string calldata _itemType) external view returns (uint[] memory) {
    uint[] memory result = new uint[](projects.length);
    uint counter = 0;
    for (uint i = 0; i < projects.length; i++) {
      for (uint j = 0; j < projects[i].items.length; j++) {
        if (keccak256(abi.encodePacked(projects[i].items[j].itemType)) == keccak256(abi.encodePacked(_itemType))) {
          result[counter] = i;
          counter++;
          break;
        }
      }
    }
    return result;
  }

  // Jeff added:
//   function setUserName(string _usrname) public {
//     username = _usrname;
//   }

//   function getUserName() external view returns (string) {
//     return username;
//   }
//
}

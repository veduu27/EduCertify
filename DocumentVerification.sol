// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentVerification {
    address public admin;

    struct Document {
        bytes32 hash;
        bool isVerified;
    }

    mapping(address => Document[]) public studentDocuments;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function uploadDocument(address student, bytes32 docHash) public onlyAdmin {
        studentDocuments[student].push(Document(docHash, true));
    }

    function verifyDocument(address student, bytes32 docHash) public view returns (bool) {
        Document[] memory docs = studentDocuments[student];
        for (uint i = 0; i < docs.length; i++) {
            if (docs[i].hash == docHash && docs[i].isVerified) {
                return true;
            }
        }
        return false;
    }
}
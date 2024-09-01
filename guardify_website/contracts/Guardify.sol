// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Guardify {
    struct AttackRecord {
        address attacker;
        uint256 timestamp;
        string attackType;
    }

    AttackRecord[] public attackRecords;

    function recordAttack(string memory _attackType) public {
        AttackRecord memory newRecord = AttackRecord({
            attacker: msg.sender,
            timestamp: block.timestamp,
            attackType: _attackType
        });
        attackRecords.push(newRecord);
    }

    function getAttackRecords() public view returns (AttackRecord[] memory) {
        return attackRecords;
    }
}

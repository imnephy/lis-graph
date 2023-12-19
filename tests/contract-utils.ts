import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Claimed,
  NGOCreated,
  NGOFinished,
  RewardsUpdated,
  Staked,
  WithdrawClaimed,
  WithdrawRequested
} from "../generated/Contract/Contract"

export function createClaimedEvent(_staker: Address, _eth: BigInt): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam("_staker", ethereum.Value.fromAddress(_staker))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("_eth", ethereum.Value.fromUnsignedBigInt(_eth))
  )

  return claimedEvent
}

export function createNGOCreatedEvent(
  _name: string,
  _imageLink: string,
  _description: string,
  _link: string,
  _rewardsOwner: Address,
  _ngoAddress: Address
): NGOCreated {
  let ngoCreatedEvent = changetype<NGOCreated>(newMockEvent())

  ngoCreatedEvent.parameters = new Array()

  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )
  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam("_imageLink", ethereum.Value.fromString(_imageLink))
  )
  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_description",
      ethereum.Value.fromString(_description)
    )
  )
  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam("_link", ethereum.Value.fromString(_link))
  )
  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_rewardsOwner",
      ethereum.Value.fromAddress(_rewardsOwner)
    )
  )
  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_ngoAddress",
      ethereum.Value.fromAddress(_ngoAddress)
    )
  )

  return ngoCreatedEvent
}

export function createNGOFinishedEvent(
  _ngo: Address,
  _timestamp: BigInt
): NGOFinished {
  let ngoFinishedEvent = changetype<NGOFinished>(newMockEvent())

  ngoFinishedEvent.parameters = new Array()

  ngoFinishedEvent.parameters.push(
    new ethereum.EventParam("_ngo", ethereum.Value.fromAddress(_ngo))
  )
  ngoFinishedEvent.parameters.push(
    new ethereum.EventParam(
      "_timestamp",
      ethereum.Value.fromUnsignedBigInt(_timestamp)
    )
  )

  return ngoFinishedEvent
}

export function createRewardsUpdatedEvent(
  _rewardsPool: BigInt,
  _stakedBalance: BigInt,
  _totalShare: BigInt,
  _dateRecountRewards: BigInt
): RewardsUpdated {
  let rewardsUpdatedEvent = changetype<RewardsUpdated>(newMockEvent())

  rewardsUpdatedEvent.parameters = new Array()

  rewardsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_rewardsPool",
      ethereum.Value.fromUnsignedBigInt(_rewardsPool)
    )
  )
  rewardsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_stakedBalance",
      ethereum.Value.fromUnsignedBigInt(_stakedBalance)
    )
  )
  rewardsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_totalShare",
      ethereum.Value.fromUnsignedBigInt(_totalShare)
    )
  )
  rewardsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_dateRecountRewards",
      ethereum.Value.fromUnsignedBigInt(_dateRecountRewards)
    )
  )

  return rewardsUpdatedEvent
}

export function createStakedEvent(
  _staker: Address,
  _amountStaked: BigInt,
  _percentShare: i32,
  _duration: BigInt,
  _ngo: Address,
  _startDate: BigInt
): Staked {
  let stakedEvent = changetype<Staked>(newMockEvent())

  stakedEvent.parameters = new Array()

  stakedEvent.parameters.push(
    new ethereum.EventParam("_staker", ethereum.Value.fromAddress(_staker))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "_amountStaked",
      ethereum.Value.fromUnsignedBigInt(_amountStaked)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "_percentShare",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_percentShare))
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "_duration",
      ethereum.Value.fromUnsignedBigInt(_duration)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("_ngo", ethereum.Value.fromAddress(_ngo))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "_startDate",
      ethereum.Value.fromUnsignedBigInt(_startDate)
    )
  )

  return stakedEvent
}

export function createWithdrawClaimedEvent(
  _claimer: Address,
  _ngo: Address,
  _amount: BigInt,
  _requestId: BigInt
): WithdrawClaimed {
  let withdrawClaimedEvent = changetype<WithdrawClaimed>(newMockEvent())

  withdrawClaimedEvent.parameters = new Array()

  withdrawClaimedEvent.parameters.push(
    new ethereum.EventParam("_claimer", ethereum.Value.fromAddress(_claimer))
  )
  withdrawClaimedEvent.parameters.push(
    new ethereum.EventParam("_ngo", ethereum.Value.fromAddress(_ngo))
  )
  withdrawClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  withdrawClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_requestId",
      ethereum.Value.fromUnsignedBigInt(_requestId)
    )
  )

  return withdrawClaimedEvent
}

export function createWithdrawRequestedEvent(
  _staker: Address,
  _ngo: Address,
  _requestId: BigInt
): WithdrawRequested {
  let withdrawRequestedEvent = changetype<WithdrawRequested>(newMockEvent())

  withdrawRequestedEvent.parameters = new Array()

  withdrawRequestedEvent.parameters.push(
    new ethereum.EventParam("_staker", ethereum.Value.fromAddress(_staker))
  )
  withdrawRequestedEvent.parameters.push(
    new ethereum.EventParam("_ngo", ethereum.Value.fromAddress(_ngo))
  )
  withdrawRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "_requestId",
      ethereum.Value.fromUnsignedBigInt(_requestId)
    )
  )

  return withdrawRequestedEvent
}

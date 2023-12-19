import {
  Claimed,
  NGOCreated,
  NGOFinished,
  RewardsUpdated,
  Staked,
  WithdrawClaimed,
  WithdrawRequested,
} from "../generated/templates/NGOLisSource/NGOLis"
import {
  Claimed as ClaimedSchema,
  NGOCreated as NGOCreatedSchema,
  NGOFinished as NGOFinishedSchema,
  RewardsUpdated as RewardsUpdatedSchema,
  Staked as StakedSchema,
  WithdrawClaimed as WithdrawClaimedSchema,
  WithdrawRequested as WithdrawRequestedSchema,
} from "../generated/schema"

export const handleClaimed = (event: Claimed): void => {
  const claim = new ClaimedSchema(event.transaction.hash)
  claim._eth = event.params._eth
  claim._staker = event.params._staker
  claim.save()
}
export const handleNGOCreated = (event: NGOCreated): void => {
  const ngoCreate = new NGOCreatedSchema(event.transaction.hash)
  ngoCreate.blockNumber = event.block.number
  ngoCreate._description = event.params._description
  ngoCreate._imageLink = event.params._imageLink
  ngoCreate._link = event.params._link
  ngoCreate._name = event.params._name
  ngoCreate._ngoAddress = event.params._ngoAddress
  ngoCreate._rewardsOwner = event.params._rewardsOwner
  ngoCreate.blockTimestamp = event.block.timestamp
  ngoCreate.transactionHash = event.transaction.hash
  ngoCreate.save()
}
export const handleNGOFinished = (event: NGOFinished): void => {
  const ngoFinished = new NGOFinishedSchema(event.transaction.hash)
  ngoFinished._ngo = event.params._ngo
  ngoFinished._timestamp = event.params._timestamp
  ngoFinished.blockNumber = event.block.number
  ngoFinished.blockTimestamp = event.block.timestamp
  ngoFinished.save()
}
export const handleRewardsUpdated = (event: RewardsUpdated): void => {
  const rewardsUpdated = new RewardsUpdatedSchema(
    event.transaction.hash
  )
  rewardsUpdated._dateRecountRewards =
    event.params._dateRecountRewards
  rewardsUpdated._rewardsPool = event.params._rewardsPool
  rewardsUpdated._stakedBalance = event.params._stakedBalance
  rewardsUpdated._totalShare = event.params._totalShare
  rewardsUpdated.blockNumber = event.block.number
  rewardsUpdated.blockTimestamp = event.block.timestamp
  rewardsUpdated.save()
}
export const handleStaked = (event: Staked): void => {
  const staked = new StakedSchema(event.transaction.hash)
  staked._amountStaked = event.params._amountStaked
  staked._duration = event.params._duration
  staked._ngo = event.params._ngo
  staked._percentShare = event.params._percentShare
  staked._staker = event.params._staker
  staked._startDate = event.params._startDate
  staked.blockNumber = event.block.number
  staked.blockTimestamp = event.block.timestamp
  staked.save()
}
export const handleWithdrawClaimed = (
  event: WithdrawClaimed
): void => {
  const withdrawClaimed = new WithdrawClaimedSchema(
    event.transaction.hash
  )
  withdrawClaimed._amount = event.params._amount
  withdrawClaimed._claimer = event.params._claimer
  withdrawClaimed._ngo = event.params._ngo
  withdrawClaimed._requestId = event.params._requestId
  withdrawClaimed.blockNumber = event.block.number
  withdrawClaimed.blockTimestamp = event.block.timestamp
  withdrawClaimed.save()
}
export const handleWithdrawRequested = (
  event: WithdrawRequested
): void => {
  const withdrawRequested = new WithdrawRequestedSchema(
    event.transaction.hash
  )
  withdrawRequested._ngo = event.params._ngo
  withdrawRequested._requestId = event.params._requestId
  withdrawRequested._staker = event.params._staker
  withdrawRequested.blockNumber = event.block.number
  withdrawRequested.blockTimestamp = event.block.timestamp
  withdrawRequested.save()
}

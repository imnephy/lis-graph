import { NGOCreated as NGOCreatedEvent } from "../generated/NGOLisFactory/NGOLisFactory"
import { NGOCreated } from "../generated/schema"

export function handleNGOCreated(event: NGOCreatedEvent): void {
  let entity = new NGOCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._name = event.params._name
  entity._imageLink = event.params._imageLink
  entity._description = event.params._description
  entity._link = event.params._link
  entity._rewardsOwner = event.params._rewardsOwner
  entity._ngoAddress = event.params._ngoAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

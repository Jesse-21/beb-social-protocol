---
sidebar_position: 2
---

# The BEB NFT Community (NFTC)

The BEB Indestructible Community is of the [ERC-721 standard](https://eips.ethereum.org/EIPS/eip-721), in order to define an interface that is sufficient for an NFT Community (**NFTC**). A simplified interface is available as follow.

```js
/* Define an interface for a BEB Indestructible Community */
interface IBebIndestructibleCommunity extends ERC721, BebNameRegistrar, Ownable {
  /** Register a controller to the registrar. */
  /**@require caller to be the owner of the contract. */
  function addController(address controller) external onlyOwner

  /** Delete a controller from the registrar. */
  /**@require caller to be the owner of the contract. */
  function removeController(address controller) external onlyOwner

  /* List of owner of the community */
  /** @require the token lease to be non-expired at the name registrar level */
  function ownerOf(uint256 _tokenId) external view returns(address);

  /* Verify if a name already exists. Useful for burning expired names. */
  function _exist(uint256 _tokenId) internal returns(uint256);

  /** Get the expiration timestamp of a tokenId*/
  function getExpiry(uint256 _tokenId) external view returns(uint256)

  /** Get the availability of a particular name */
  function available(uint256 _tokenId) external view returns(bool)

  /** Mint a name. */
  /**@require name (tokenId) to be available. */
  /**@require caller to be a registered controller. */
  function register(uint256 _tokenId, address owner, uint256 duration) external onlyControllers returns(uint256)

  /** Reclaim a name. Useful in case of a name transferred to a contract. */
  /**@require msg.sender to be an approved user or owner of the tokenId. */
  function reclaim(uint256 _tokenId) external returns(uint256)
}
```

The community name can be transferred and acquired just like normal ERC-721s. Similarly, users will interact with this contract in order to renew, transfer ownership, get expiration dates, name availability, etc.

For initial registration and for renewals, users will need to interact with a controller contract via commit/reveal process to prevent frontrunning. The separation of the controller and the main registrar is a common pattern used by many protocols to reduce the attack surface, thus granting the users continual ownership as long as the registrar is in place.

Initially, a single controller is implemented, the `BebGenesisController`. The ability to add and remove controllers is crucial in implementing future upgrades and controller contracts. The BEB DAO will eventually vote on controller-related changes.

## BEB Names

Registration of human-readable community names is a critical feature of the BEB Community Protocol, making NFTCs have an optional BEB Name, accessible by a BEB client through `[name].client.xyz` or `[name].beb`. If a BEB NFTC does not have a name, it is `client.xyz/[contractAddress]/[tokenId]` by default. Note that a BEB Name is blockchain agnostic, the communities aren't branded by a specific chain protocol, rather the BEB protocol itself.

## BEB Name Leasing

To discourage community squatting, we design BEB NFTC Names to be leasable, which means they are controlled by the BEB Registrar. Shorter names will have a higher name mint and yearly renewal. Price is computed by an oracle, with a rate to mint, and a rate per year to lease.

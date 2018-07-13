function RSKFederationAddress() {
  // Federation "getFederationAddress" ABI
  this.getFederationAddressABI = [
    {
      name: "getFederationAddress",
      type: "function",
      constant: true,
      inputs: [],
      outputs: [{ name: "", type: "string" }]
    }
  ]

  // Federation contract address (works for mainnet and testnet)
  this.fedContractAddress = "0x0000000000000000000000000000000001000006"
}

/**
 * Get the current federation address
 */
RSKFederationAddress.prototype.getFederationAddress = function() {
  let resultPromise = new Promise((resolve, reject) => {
    let contract = web3.eth
      .contract(this.getFederationAddressABI)
      .at(this.fedContractAddress)

    // call the contract method
    contract.getFederationAddress((err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })

  return resultPromise
}

module.exports = RSKFederationAddress

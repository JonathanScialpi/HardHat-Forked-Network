async function main () {
  const address = '0x0b8A26eF66Bb48c918674b01CA9499D145108473' // change with a contract or wallet address 

  await ethers.provider.getBalance(address).then((balance) => {
    // convert a currency unit from wei to ether
    const balanceInEth = ethers.utils.formatEther(balance)
    console.log(`balance: ${balanceInEth} ETH`)
    })
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
import Web3 from 'web3';
import { CONTRACT_ABI } from '../config/abi';
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_NETWORK_ENDPOINT));

function financialBalance(numMfil) {
  return Number.parseFloat(numMfil / 1e18).toFixed(18);
}

export const balanceAvailable = async (fromAddress, tokenAddress, tokenAmount) => {
  let contract = new web3.eth.Contract(CONTRACT_ABI, tokenAddress);
  let balance = await contract.methods.balanceOf(fromAddress).call();
  console.log('[balance]', financialBalance(balance), tokenAmount)
  if(financialBalance(balance) < parseFloat(tokenAmount)) {
    return false;
  } 
  return true;
}

export const transferToken = async (fromAddress, toAddress, tokenAddress, tokenAmount, chainId) => {

  const gasLimit = web3.utils.toHex(6200000);

  try {

    let contract = new web3.eth.Contract(CONTRACT_ABI, tokenAddress);

    // # of transactions in my account
    // let count = await web3.eth.getTransactionCount(fromAddress);
    // console.log('Number of transactions so far in my account: ', count);

    // My balance
    // let balance = await contract.methods.balanceOf(fromAddress).call();
    // console.log('Balance before send: ', financialBalance(balance));
    
    // if(balance < tokenAmount) return { success: false };
    tokenAmount = web3.utils.toWei(tokenAmount, 'ether')

    let encoded = contract.methods.transfer(toAddress, tokenAmount).encodeABI();
    let tx = {
      gasLimit: gasLimit,
      to: tokenAddress,
      data: encoded,
      chainId: chainId
    };

    let signed = await web3.eth.accounts.signTransaction(tx, process.env.REACT_APP_MY_ACCOUNT_PRIVATE_KEY);
    let receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);

    console.log('[transfer result]', receipt);
    return { success: true, data: receipt};
  } catch (err) {
    console.log('[err]', err);
    return { success: false };
  }
}
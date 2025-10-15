let web3;
let contract;

// Replace this with your Remix-deployed contract address
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

window.addEventListener("load", async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    const abi = await (await fetch("abi.json")).json();
    contract = new web3.eth.Contract(abi, contractAddress);
    console.log("Connected to contract");
  } else {
    alert("Please install MetaMask to use this app");
  }
});

async function hashFile(file) {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return '0x' + hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function uploadDocument() {
  const file = document.getElementById("uploadFile").files[0];
  const student = document.getElementById("studentAddress").value;
  if (!file || !student) {
    alert("Please provide a file and student address.");
    return;
  }

  const hash = await hashFile(file);
  document.getElementById("uploadHash").innerText = `Generated Hash: ${hash}`;

  const accounts = await web3.eth.getAccounts();
  try {
    await contract.methods.uploadDocument(student, hash).send({ from: accounts[0] });
    document.getElementById("status").innerText = "✅ Hash stored on blockchain!";
  } catch (err) {
    document.getElementById("status").innerText = `❌ Error: ${err.message}`;
  }
}

async function verifyDocument() {
  const file = document.getElementById("verifyFile").files[0];
  const student = document.getElementById("verifyAddress").value;
  if (!file || !student) {
    alert("Please provide a file and student address.");
    return;
  }

  const hash = await hashFile(file);

  try {
    const verified = await contract.methods.verifyDocument(student, hash).call();
    document.getElementById("status").innerText = verified
      ? "✅ Document is verified."
      : "❌ Document not found on blockchain.";
  } catch (err) {
    document.getElementById("status").innerText = `❌ Error: ${err.message}`;
  }
}



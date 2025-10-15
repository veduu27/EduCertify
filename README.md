⛓️ EduCertify: Blockchain Document Verifier
EduCertify is a decentralized application (DApp) that allows for the secure storage and verification of document hashes on the blockchain. It provides a simple and modern interface for an administrator to upload a document's hash associated with a student's address and for anyone to verify that document's authenticity later.

✨ Features
Secure Hash Storage: An admin can upload a document's SHA-256 hash to an Ethereum-compatible blockchain.
Immutable Verification: Anyone can upload a document to verify if its hash matches a record on the blockchain.
Admin-Only Uploads: The smart contract restricts the upload functionality to the contract administrator (admin).
Modern UI: Features a sleek, responsive "glass effect" user interface.
MetaMask Integration: Connects with MetaMask for easy interaction with the blockchain.
🛠️ Tech Stack
Smart Contract: Solidity
Frontend: HTML5, CSS3, JavaScript
Web3 Library: Web3.js
Hashing: Web Crypto API (SHA-256)
🚀 Getting Started
To run this project locally, follow these steps.

Prerequisites
MetaMask extension installed on your browser.
A code editor (like VS Code).
Ganache
Installation & Setup
Clone the repository:

git clone https://github.com/UNKNOWN69x0/EduCertify.git
Deploy the Smart Contract:

Open DocumentVerification.sol in an online IDE like Remix.
Compile and deploy the contract to a test network (e.g., Localhost connected with ganache).
Copy the deployed contract's address.
Configure the Frontend:

Open app.js in your code editor.
Replace the placeholder contractAddress with the address you copied from Remix.
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
Run the Application:

Simply open the index.html file in your web browser or use live server extension if on VS Code. The page will prompt you to connect your MetaMask wallet.
⚙️ How It Works
Storing a Document Hash
The contract admin connects their wallet.
They select a document and enter a student's Ethereum address in the "Store Document Hash" card.
The frontend calculates the document's SHA-256 hash.
The admin clicks "Upload to Blockchain," which calls the uploadDocument function in the smart contract, storing the hash.
Verifying a Document
Anyone can open the DApp.
They select the document they want to verify and enter the associated student's address in the "Verify Document" card.
The frontend calculates the hash of the selected document.
The user clicks "Verify Against Blockchain," which calls the verifyDocument view function to check if the hash exists on-chain for that student. The result is then displayed.

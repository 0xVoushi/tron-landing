export type GuideStep = {
  text: string
}

export type GuideSection = {
  title: string
  steps: GuideStep[]
}

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    title: 'Step 1 — Prepare',
    steps: [
      { text: 'Connect your TRON wallet (TronLink, TokenPocket, or any TronWeb-compatible wallet).' },
      { text: 'Select the network: Mainnet, or Shasta / Nile Testnet for testing.' },
      { text: 'Select the token from the list — TRX, TRC-10, or TRC-20 — or paste the contract address directly.' },
      { text: 'Enter recipient addresses and amounts. You can paste them manually or upload a CSV / XLS / XLSX file with two columns: address and amount.' },
      { text: 'Click the Proceed button to continue.' },
    ],
  },
  {
    title: 'Step 2 — Approve',
    steps: [
      { text: 'Accept the terms of service and click Continue.' },
      { text: 'Approve the token allowance transaction in your wallet. This gives the Multisender contract permission to transfer your tokens.' },
      { text: 'Wait for the approval transaction to confirm. You will be automatically redirected to the final step.' },
    ],
  },
  {
    title: 'Step 3 — Multisend',
    steps: [
      { text: 'Click the MultiSend button to initiate the batch transfer.' },
      { text: 'Confirm the transaction in your wallet.' },
      { text: "Wait for the transaction to be mined. All recipients will receive their funds within 3–5 minutes thanks to TRON's fast block time." },
    ],
  },
]

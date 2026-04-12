export type FaqItem = {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is Tron Multisender?',
    answer:
      'Tron Multisender is an official on-chain tool that lets you send TRX or TRC-20 tokens to multiple wallet addresses in a single blockchain transaction on the TRON network.',
  },
  {
    question: 'How do I send USDT to multiple addresses on TRON?',
    answer:
      'Connect your TronLink wallet, select TRC-20 as the token type and enter the USDT contract address, then add recipient addresses and amounts — or upload a CSV file. Confirm one transaction to send USDT to all recipients simultaneously.',
  },
  {
    question: 'Can I send different amounts to each address?',
    answer:
      'Yes. You can set a custom amount per address, or choose to send equal amounts to all recipients. Both manual entry and CSV upload support per-address custom amounts.',
  },
  {
    question: 'Is Tron Multisender safe to use?',
    answer:
      'Yes. Tron Multisender is fully non-custodial — your private keys never leave your wallet. All transfers happen directly on-chain via smart contract. There is no registration or account required.',
  },
  {
    question: 'What tokens does Tron Multisender support?',
    answer:
      'Tron Multisender supports TRX (native TRON), TRC-10 tokens, and any TRC-20 token including USDT, USDC, WTRX, and BTT. Any valid TRC-20 contract address can be used.',
  },
  {
    question: 'How many addresses can I send to at once?',
    answer:
      'You can send to up to 1,000 addresses in a single transaction. For larger distributions, you can split into multiple batches.',
  },
  {
    question: 'How much does it cost to use Tron Multisender?',
    answer:
      'A small service fee applies per transaction. Using batch transfer also significantly reduces the total bandwidth and energy cost compared to sending individually — typically saving around 90% in fees.',
  },
  {
    question: 'How does CSV upload work?',
    answer:
      'Prepare a CSV file with two columns: wallet address and amount. Upload it in the app and Tron Multisender will parse and validate all entries before you confirm the transaction.',
  },
  {
    question: 'What wallet do I need?',
    answer:
      'You need a TRON-compatible wallet such as TronLink (browser extension or mobile), TokenPocket, or any wallet that supports TronWeb. No new wallet creation is needed.',
  },
  {
    question: 'What is the difference vs manual sending?',
    answer:
      'Sending manually requires one transaction per recipient — time-consuming and expensive. Tron Multisender batches all transfers into one transaction, saving up to 90% in fees and completing in seconds.',
  },
  {
    question: 'Does Tron Multisender require registration or KYC?',
    answer:
      'No. There is no registration, account creation, or KYC required. Just connect your TRON wallet and start sending.',
  },
  {
    question: 'Can I use Tron Multisender to pay salaries or rewards in USDT?',
    answer:
      'Yes. Tron Multisender is widely used for crypto payroll — upload a CSV with recipient wallets and USDT amounts, confirm one transaction, and all payments are sent instantly.',
  },
]

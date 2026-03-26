# DAO On-Chain Governance

This repository implements the gold standard for decentralized decision-making. It follows the **Governor** pattern used by industry leaders like Uniswap and Compound.

## The Governance Lifecycle
1. **Proposal**: A token holder with enough voting power submits a proposal (e.g., "Transfer 10,000 USDC from Treasury").
2. **Voting Period**: Holders cast "For," "Against," or "Abstain" votes.
3. **Queue**: If the proposal passes (reaches quorum and majority), it is moved to a **Timelock**.
4. **Execution**: After a delay (e.g., 2 days), the proposal is executed on-chain.

## Key Components
* **Governor**: The logic brain that handles voting and counting.
* **Votes Token**: An ERC-20 token with "Checkpointing" to prevent double-voting.
* **Timelock**: A security layer that delays execution to give users time to exit if they disagree.

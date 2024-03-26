/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category StakeReserve
 * @category generated
 */
export type StakeReserveInstructionArgs = {
  validatorIndex: number
}
/**
 * @category Instructions
 * @category StakeReserve
 * @category generated
 */
export const stakeReserveStruct = new beet.BeetArgsStruct<
  StakeReserveInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['validatorIndex', beet.u32],
  ],
  'StakeReserveInstructionArgs',
)
/**
 * Accounts required by the _stakeReserve_ instruction
 *
 * @property [_writable_] state
 * @property [_writable_] validatorList
 * @property [_writable_] stakeList
 * @property [_writable_] validatorVote
 * @property [_writable_] reservePda
 * @property [_writable_, **signer**] stakeAccount
 * @property [] stakeDepositAuthority
 * @property [_writable_, **signer**] rentPayer
 * @property [] clock
 * @property [] epochSchedule
 * @property [] stakeHistory
 * @property [] stakeConfig
 * @property [] stakeProgram
 * @category Instructions
 * @category StakeReserve
 * @category generated
 */
export type StakeReserveInstructionAccounts = {
  state: web3.PublicKey
  validatorList: web3.PublicKey
  stakeList: web3.PublicKey
  validatorVote: web3.PublicKey
  reservePda: web3.PublicKey
  stakeAccount: web3.PublicKey
  stakeDepositAuthority: web3.PublicKey
  rentPayer: web3.PublicKey
  clock: web3.PublicKey
  epochSchedule: web3.PublicKey
  rent?: web3.PublicKey
  stakeHistory: web3.PublicKey
  stakeConfig: web3.PublicKey
  systemProgram?: web3.PublicKey
  stakeProgram: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const stakeReserveInstructionDiscriminator = [
  87, 217, 23, 179, 205, 25, 113, 129,
]

/**
 * Creates a _StakeReserve_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category StakeReserve
 * @category generated
 */
export function createStakeReserveInstruction(
  accounts: StakeReserveInstructionAccounts,
  args: StakeReserveInstructionArgs,
  programId = new web3.PublicKey('MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD'),
) {
  const [data] = stakeReserveStruct.serialize({
    instructionDiscriminator: stakeReserveInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.state,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.validatorList,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeList,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.validatorVote,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.reservePda,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeAccount,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.stakeDepositAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rentPayer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.clock,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.epochSchedule,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeHistory,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeConfig,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeProgram,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}

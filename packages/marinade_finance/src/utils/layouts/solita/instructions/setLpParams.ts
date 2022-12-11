/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { Fee, feeBeet } from '../types/Fee.js'

/**
 * @category Instructions
 * @category SetLpParams
 * @category generated
 */
export type SetLpParamsInstructionArgs = {
  minFee: Fee
  maxFee: Fee
  liquidityTarget: beet.bignum
}
/**
 * @category Instructions
 * @category SetLpParams
 * @category generated
 */
export const setLpParamsStruct = new beet.BeetArgsStruct<
  SetLpParamsInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['minFee', feeBeet],
    ['maxFee', feeBeet],
    ['liquidityTarget', beet.u64],
  ],
  'SetLpParamsInstructionArgs',
)
/**
 * Accounts required by the _setLpParams_ instruction
 *
 * @property [_writable_] state
 * @property [**signer**] adminAuthority
 * @category Instructions
 * @category SetLpParams
 * @category generated
 */
export type SetLpParamsInstructionAccounts = {
  state: web3.PublicKey
  adminAuthority: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const setLpParamsInstructionDiscriminator = [
  227, 163, 242, 45, 79, 203, 106, 44,
]

/**
 * Creates a _SetLpParams_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category SetLpParams
 * @category generated
 */
export function createSetLpParamsInstruction(
  accounts: SetLpParamsInstructionAccounts,
  args: SetLpParamsInstructionArgs,
  programId = new web3.PublicKey('MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD'),
) {
  const [data] = setLpParamsStruct.serialize({
    instructionDiscriminator: setLpParamsInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.state,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.adminAuthority,
      isWritable: false,
      isSigner: true,
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

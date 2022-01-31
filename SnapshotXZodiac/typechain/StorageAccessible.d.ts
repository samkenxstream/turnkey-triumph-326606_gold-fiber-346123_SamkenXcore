/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface StorageAccessibleInterface extends ethers.utils.Interface {
  functions: {
    "getStorageAt(uint256,uint256)": FunctionFragment;
    "simulateAndRevert(address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getStorageAt",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "simulateAndRevert",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getStorageAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "simulateAndRevert",
    data: BytesLike
  ): Result;

  events: {};
}

export class StorageAccessible extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: StorageAccessibleInterface;

  functions: {
    getStorageAt(
      offset: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    simulateAndRevert(
      targetContract: string,
      calldataPayload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getStorageAt(
    offset: BigNumberish,
    length: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  simulateAndRevert(
    targetContract: string,
    calldataPayload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getStorageAt(
      offset: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    simulateAndRevert(
      targetContract: string,
      calldataPayload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getStorageAt(
      offset: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    simulateAndRevert(
      targetContract: string,
      calldataPayload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getStorageAt(
      offset: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    simulateAndRevert(
      targetContract: string,
      calldataPayload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
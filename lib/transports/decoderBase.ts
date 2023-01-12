import { type Packet } from "engine.io-parser";

export abstract class Decoder {
  /**
   * Decoder abstract constructor
   */
  constructor() {}

  /**
   * Function to decode data to a packet
   * @param data data to decode
   * @param binaryType
   */
  public decodePacket(data, binaryType): Packet {
    throw "There is no decoder implemented";
  }
}

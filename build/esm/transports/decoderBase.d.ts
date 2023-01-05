import { type Packet } from "engine.io-parser";
export declare abstract class Decoder {
    constructor();
    decodePacket(data: any, binaryType: any): Packet;
}

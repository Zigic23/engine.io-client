import { type Packet } from "engine.io-parser";
export declare abstract class Decoder {
    constructor();
    abstract decodePacket(data: any, binaryType: any): Packet;
}

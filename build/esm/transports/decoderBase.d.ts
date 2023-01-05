import { type Packet } from "engine.io-parser";
export declare abstract class Decoder {
    abstract decodePacket(data: any, binaryType: any): Packet[];
}

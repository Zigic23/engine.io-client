import { type Packet } from "engine.io-parser";

export class Decoder {
    public decodePacket(data, binaryType) : Packet {
        throw "There is no decoder implemented";
    }
}
import { type Packet } from "engine.io-parser";

export abstract class Decoder {
    constructor() {
        
    }

    public decodePacket(data, binaryType) : Packet {
        throw "There is no decoder implemented";
    }
}
import { type Packet } from "engine.io-parser";

export abstract class Decoder {
    constructor(){}

    public abstract decodePacket(data, binaryType) : Packet
}
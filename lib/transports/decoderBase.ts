import { type Packet } from "engine.io-parser";

export abstract class Decoder {
    public abstract decodePacket(data, binaryType) : Packet[]
}
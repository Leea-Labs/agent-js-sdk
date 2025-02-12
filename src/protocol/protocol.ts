// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "protocol.proto" (package "leea_agent_protocol", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message leea_agent_protocol.Envelope
 */
export interface Envelope {
    /**
     * @generated from protobuf field: leea_agent_protocol.Envelope.MessageType Type = 1 [json_name = "Type"];
     */
    type: Envelope_MessageType;
    /**
     * @generated from protobuf field: bytes Payload = 2 [json_name = "Payload"];
     */
    payload: Uint8Array;
}
/**
 * @generated from protobuf enum leea_agent_protocol.Envelope.MessageType
 */
export enum Envelope_MessageType {
    /**
     * @generated from protobuf enum value: AgentHello = 0;
     */
    AgentHello = 0,
    /**
     * @generated from protobuf enum value: ServerHello = 1;
     */
    ServerHello = 1,
    /**
     * @generated from protobuf enum value: ExecutionRequest = 100;
     */
    ExecutionRequest = 100,
    /**
     * @generated from protobuf enum value: ExecutionResult = 101;
     */
    ExecutionResult = 101,
    /**
     * @generated from protobuf enum value: ExecutionLog = 102;
     */
    ExecutionLog = 102,
    /**
     * @generated from protobuf enum value: Error = 500;
     */
    Error = 500
}
/**
 * @generated from protobuf message leea_agent_protocol.AgentHello
 */
export interface AgentHello {
    /**
     * @generated from protobuf field: string Name = 1 [json_name = "Name"];
     */
    name: string;
    /**
     * @generated from protobuf field: string Description = 2 [json_name = "Description"];
     */
    description: string;
    /**
     * @generated from protobuf field: string InputSchema = 3 [json_name = "InputSchema"];
     */
    inputSchema: string;
    /**
     * @generated from protobuf field: string OutputSchema = 4 [json_name = "OutputSchema"];
     */
    outputSchema: string;
    /**
     * @generated from protobuf field: string PublicKey = 5 [json_name = "PublicKey"];
     */
    publicKey: string;
    /**
     * @generated from protobuf field: string Signature = 6 [json_name = "Signature"];
     */
    signature: string;
    /**
     * @generated from protobuf field: leea_agent_protocol.AgentHello.AgentVisibility Visibility = 7 [json_name = "Visibility"];
     */
    visibility: AgentHello_AgentVisibility;
    /**
     * @generated from protobuf field: string DisplayName = 8 [json_name = "DisplayName"];
     */
    displayName: string;
    /**
     * @generated from protobuf field: optional bytes Avatar = 9 [json_name = "Avatar"];
     */
    avatar?: Uint8Array;
}
/**
 * @generated from protobuf enum leea_agent_protocol.AgentHello.AgentVisibility
 */
export enum AgentHello_AgentVisibility {
    /**
     * @generated from protobuf enum value: public = 0;
     */
    public = 0,
    /**
     * @generated from protobuf enum value: private = 1;
     */
    private = 1
}
/**
 * @generated from protobuf message leea_agent_protocol.ServerHello
 */
export interface ServerHello {
}
/**
 * @generated from protobuf message leea_agent_protocol.Error
 */
export interface Error {
    /**
     * @generated from protobuf field: string RequestID = 1 [json_name = "RequestID"];
     */
    requestID: string;
    /**
     * @generated from protobuf field: string Message = 2 [json_name = "Message"];
     */
    message: string;
    /**
     * @generated from protobuf field: string ErrorCode = 3 [json_name = "ErrorCode"];
     */
    errorCode: string;
}
/**
 * @generated from protobuf message leea_agent_protocol.ExecutionRequest
 */
export interface ExecutionRequest {
    /**
     * @generated from protobuf field: string SessionID = 1 [json_name = "SessionID"];
     */
    sessionID: string;
    /**
     * @generated from protobuf field: string RequestID = 2 [json_name = "RequestID"];
     */
    requestID: string;
    /**
     * @generated from protobuf field: optional string ParentID = 3 [json_name = "ParentID"];
     */
    parentID?: string;
    /**
     * @generated from protobuf field: string AgentID = 4 [json_name = "AgentID"];
     */
    agentID: string; // Agent that should be triggered
    /**
     * @generated from protobuf field: string Input = 5 [json_name = "Input"];
     */
    input: string; // Should follow agent input schema
}
/**
 * @generated from protobuf message leea_agent_protocol.ExecutionLog
 */
export interface ExecutionLog {
    /**
     * @generated from protobuf field: string RequestID = 1 [json_name = "RequestID"];
     */
    requestID: string;
    /**
     * @generated from protobuf field: string Message = 2 [json_name = "Message"];
     */
    message: string;
}
/**
 * @generated from protobuf message leea_agent_protocol.ExecutionResult
 */
export interface ExecutionResult {
    /**
     * @generated from protobuf field: string RequestID = 1 [json_name = "RequestID"];
     */
    requestID: string;
    /**
     * @generated from protobuf field: bool IsSuccessful = 2 [json_name = "IsSuccessful"];
     */
    isSuccessful: boolean;
    /**
     * @generated from protobuf field: string Result = 3 [json_name = "Result"];
     */
    result: string; // Should follow agent output schema
}
// @generated message type with reflection information, may provide speed optimized methods
class Envelope$Type extends MessageType<Envelope> {
    constructor() {
        super("leea_agent_protocol.Envelope", [
            { no: 1, name: "Type", kind: "enum", jsonName: "Type", T: () => ["leea_agent_protocol.Envelope.MessageType", Envelope_MessageType] },
            { no: 2, name: "Payload", kind: "scalar", jsonName: "Payload", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<Envelope>): Envelope {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.type = 0;
        message.payload = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<Envelope>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Envelope): Envelope {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* leea_agent_protocol.Envelope.MessageType Type = 1 [json_name = "Type"];*/ 1:
                    message.type = reader.int32();
                    break;
                case /* bytes Payload = 2 [json_name = "Payload"];*/ 2:
                    message.payload = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Envelope, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* leea_agent_protocol.Envelope.MessageType Type = 1 [json_name = "Type"]; */
        if (message.type !== 0)
            writer.tag(1, WireType.Varint).int32(message.type);
        /* bytes Payload = 2 [json_name = "Payload"]; */
        if (message.payload.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.payload);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message leea_agent_protocol.Envelope
 */
export const Envelope = new Envelope$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AgentHello$Type extends MessageType<AgentHello> {
    constructor() {
        super("leea_agent_protocol.AgentHello", [
            { no: 1, name: "Name", kind: "scalar", jsonName: "Name", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "Description", kind: "scalar", jsonName: "Description", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "InputSchema", kind: "scalar", jsonName: "InputSchema", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "OutputSchema", kind: "scalar", jsonName: "OutputSchema", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "PublicKey", kind: "scalar", jsonName: "PublicKey", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "Signature", kind: "scalar", jsonName: "Signature", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "Visibility", kind: "enum", jsonName: "Visibility", T: () => ["leea_agent_protocol.AgentHello.AgentVisibility", AgentHello_AgentVisibility] },
            { no: 8, name: "DisplayName", kind: "scalar", jsonName: "DisplayName", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "Avatar", kind: "scalar", jsonName: "Avatar", opt: true, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<AgentHello>): AgentHello {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.description = "";
        message.inputSchema = "";
        message.outputSchema = "";
        message.publicKey = "";
        message.signature = "";
        message.visibility = 0;
        message.displayName = "";
        if (value !== undefined)
            reflectionMergePartial<AgentHello>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AgentHello): AgentHello {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string Name = 1 [json_name = "Name"];*/ 1:
                    message.name = reader.string();
                    break;
                case /* string Description = 2 [json_name = "Description"];*/ 2:
                    message.description = reader.string();
                    break;
                case /* string InputSchema = 3 [json_name = "InputSchema"];*/ 3:
                    message.inputSchema = reader.string();
                    break;
                case /* string OutputSchema = 4 [json_name = "OutputSchema"];*/ 4:
                    message.outputSchema = reader.string();
                    break;
                case /* string PublicKey = 5 [json_name = "PublicKey"];*/ 5:
                    message.publicKey = reader.string();
                    break;
                case /* string Signature = 6 [json_name = "Signature"];*/ 6:
                    message.signature = reader.string();
                    break;
                case /* leea_agent_protocol.AgentHello.AgentVisibility Visibility = 7 [json_name = "Visibility"];*/ 7:
                    message.visibility = reader.int32();
                    break;
                case /* string DisplayName = 8 [json_name = "DisplayName"];*/ 8:
                    message.displayName = reader.string();
                    break;
                case /* optional bytes Avatar = 9 [json_name = "Avatar"];*/ 9:
                    message.avatar = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: AgentHello, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string Name = 1 [json_name = "Name"]; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string Description = 2 [json_name = "Description"]; */
        if (message.description !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        /* string InputSchema = 3 [json_name = "InputSchema"]; */
        if (message.inputSchema !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.inputSchema);
        /* string OutputSchema = 4 [json_name = "OutputSchema"]; */
        if (message.outputSchema !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.outputSchema);
        /* string PublicKey = 5 [json_name = "PublicKey"]; */
        if (message.publicKey !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.publicKey);
        /* string Signature = 6 [json_name = "Signature"]; */
        if (message.signature !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.signature);
        /* leea_agent_protocol.AgentHello.AgentVisibility Visibility = 7 [json_name = "Visibility"]; */
        if (message.visibility !== 0)
            writer.tag(7, WireType.Varint).int32(message.visibility);
        /* string DisplayName = 8 [json_name = "DisplayName"]; */
        if (message.displayName !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.displayName);
        /* optional bytes Avatar = 9 [json_name = "Avatar"]; */
        if (message.avatar !== undefined)
            writer.tag(9, WireType.LengthDelimited).bytes(message.avatar);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message leea_agent_protocol.AgentHello
 */
export const AgentHello = new AgentHello$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerHello$Type extends MessageType<ServerHello> {
    constructor() {
        super("leea_agent_protocol.ServerHello", []);
    }
    create(value?: PartialMessage<ServerHello>): ServerHello {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ServerHello>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServerHello): ServerHello {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ServerHello, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message leea_agent_protocol.ServerHello
 */
export const ServerHello = new ServerHello$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Error$Type extends MessageType<Error> {
    constructor() {
        super("leea_agent_protocol.Error", [
            { no: 1, name: "RequestID", kind: "scalar", jsonName: "RequestID", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "Message", kind: "scalar", jsonName: "Message", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "ErrorCode", kind: "scalar", jsonName: "ErrorCode", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Error>): Error {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.requestID = "";
        message.message = "";
        message.errorCode = "";
        if (value !== undefined)
            reflectionMergePartial<Error>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Error): Error {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string RequestID = 1 [json_name = "RequestID"];*/ 1:
                    message.requestID = reader.string();
                    break;
                case /* string Message = 2 [json_name = "Message"];*/ 2:
                    message.message = reader.string();
                    break;
                case /* string ErrorCode = 3 [json_name = "ErrorCode"];*/ 3:
                    message.errorCode = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Error, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string RequestID = 1 [json_name = "RequestID"]; */
        if (message.requestID !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.requestID);
        /* string Message = 2 [json_name = "Message"]; */
        if (message.message !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.message);
        /* string ErrorCode = 3 [json_name = "ErrorCode"]; */
        if (message.errorCode !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.errorCode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message leea_agent_protocol.Error
 */
export const Error = new Error$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecutionRequest$Type extends MessageType<ExecutionRequest> {
    constructor() {
        super("leea_agent_protocol.ExecutionRequest", [
            { no: 1, name: "SessionID", kind: "scalar", jsonName: "SessionID", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "RequestID", kind: "scalar", jsonName: "RequestID", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "ParentID", kind: "scalar", jsonName: "ParentID", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "AgentID", kind: "scalar", jsonName: "AgentID", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "Input", kind: "scalar", jsonName: "Input", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ExecutionRequest>): ExecutionRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.sessionID = "";
        message.requestID = "";
        message.agentID = "";
        message.input = "";
        if (value !== undefined)
            reflectionMergePartial<ExecutionRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExecutionRequest): ExecutionRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string SessionID = 1 [json_name = "SessionID"];*/ 1:
                    message.sessionID = reader.string();
                    break;
                case /* string RequestID = 2 [json_name = "RequestID"];*/ 2:
                    message.requestID = reader.string();
                    break;
                case /* optional string ParentID = 3 [json_name = "ParentID"];*/ 3:
                    message.parentID = reader.string();
                    break;
                case /* string AgentID = 4 [json_name = "AgentID"];*/ 4:
                    message.agentID = reader.string();
                    break;
                case /* string Input = 5 [json_name = "Input"];*/ 5:
                    message.input = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ExecutionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string SessionID = 1 [json_name = "SessionID"]; */
        if (message.sessionID !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.sessionID);
        /* string RequestID = 2 [json_name = "RequestID"]; */
        if (message.requestID !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.requestID);
        /* optional string ParentID = 3 [json_name = "ParentID"]; */
        if (message.parentID !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.parentID);
        /* string AgentID = 4 [json_name = "AgentID"]; */
        if (message.agentID !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.agentID);
        /* string Input = 5 [json_name = "Input"]; */
        if (message.input !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.input);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message leea_agent_protocol.ExecutionRequest
 */
export const ExecutionRequest = new ExecutionRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecutionLog$Type extends MessageType<ExecutionLog> {
    constructor() {
        super("leea_agent_protocol.ExecutionLog", [
            { no: 1, name: "RequestID", kind: "scalar", jsonName: "RequestID", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "Message", kind: "scalar", jsonName: "Message", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ExecutionLog>): ExecutionLog {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.requestID = "";
        message.message = "";
        if (value !== undefined)
            reflectionMergePartial<ExecutionLog>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExecutionLog): ExecutionLog {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string RequestID = 1 [json_name = "RequestID"];*/ 1:
                    message.requestID = reader.string();
                    break;
                case /* string Message = 2 [json_name = "Message"];*/ 2:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ExecutionLog, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string RequestID = 1 [json_name = "RequestID"]; */
        if (message.requestID !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.requestID);
        /* string Message = 2 [json_name = "Message"]; */
        if (message.message !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message leea_agent_protocol.ExecutionLog
 */
export const ExecutionLog = new ExecutionLog$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecutionResult$Type extends MessageType<ExecutionResult> {
    constructor() {
        super("leea_agent_protocol.ExecutionResult", [
            { no: 1, name: "RequestID", kind: "scalar", jsonName: "RequestID", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "IsSuccessful", kind: "scalar", jsonName: "IsSuccessful", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "Result", kind: "scalar", jsonName: "Result", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ExecutionResult>): ExecutionResult {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.requestID = "";
        message.isSuccessful = false;
        message.result = "";
        if (value !== undefined)
            reflectionMergePartial<ExecutionResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExecutionResult): ExecutionResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string RequestID = 1 [json_name = "RequestID"];*/ 1:
                    message.requestID = reader.string();
                    break;
                case /* bool IsSuccessful = 2 [json_name = "IsSuccessful"];*/ 2:
                    message.isSuccessful = reader.bool();
                    break;
                case /* string Result = 3 [json_name = "Result"];*/ 3:
                    message.result = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ExecutionResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string RequestID = 1 [json_name = "RequestID"]; */
        if (message.requestID !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.requestID);
        /* bool IsSuccessful = 2 [json_name = "IsSuccessful"]; */
        if (message.isSuccessful !== false)
            writer.tag(2, WireType.Varint).bool(message.isSuccessful);
        /* string Result = 3 [json_name = "Result"]; */
        if (message.result !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.result);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message leea_agent_protocol.ExecutionResult
 */
export const ExecutionResult = new ExecutionResult$Type();

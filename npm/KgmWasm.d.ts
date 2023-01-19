export type WASM_ptr = number;
export type WASM_NUMBER = "i8" | "i16" | "i32" | "i64" | "float" | "double";

export declare interface WASMExportedRuntime {
    /**
     * Emscripten HEAP, use this for raw memory access.
     * @type {Uint8Array}
     */
    HEAPU8: Uint8Array;

    /**
     * Allocate a block of {@link size} bytes of memory in Emscripten HEAP
     * @param size Size of the memory block, in bytes.
     * @returns {WASM_ptr} Returns a pointer to the beginning of the block.
     */
    _malloc(size: number): WASM_ptr;

    /**
     * Free an allocated block of memory.
     * @param ptr Pointer to a memory block previously allocated with `malloc`.
     */
    _free(ptr: WASM_ptr): void;

    /**
     * Write an uint8 array to the Emscripten HEAP.
     * @param data Data to be written inside the Emscripten HEAP.
     * @param bufferPointer Address pointer
     */
    writeArrayToMemory(data: Uint8Array, bufferPointer: WASM_ptr): void;
}

export declare interface KgmCrypto extends WASMExportedRuntime {
    /**
     * Decryption preparations using the beginning-of-file buffer.
     * @param blob WASM ptr points to the beginning of the beginning-of-file buffer.
     * @param blobSize size of {@link blob}.
     * @param ext extension of the _original file_.
     */
    preDec(
        blob: WASM_ptr,
        blobSize: number,
        ext: string
    ): number;

    /**
     * Decrypt a block.
     * @param blob   Pointer to buffer allocated using {@link _malloc}.
     *               Data can be written here using {@link writeArrayToMemory}.
     * @param size   Size of the provided buffer.
     * @param offset Offset of the buffer from _original file_.
     *               This parameter is _required_ to derive correct key.
     */
    decBlob(
        blob: WASM_ptr,
        blobSize: number,
        offset: number
    ): void;
}

/**
 * Factory to initialise KgmCryptoModule.
 */
export default function KgmCryptoModule(): Promise<KgmCrypto>;
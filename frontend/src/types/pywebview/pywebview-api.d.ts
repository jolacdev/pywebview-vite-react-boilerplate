export declare class PyWebViewApi {
    private _instanceId?;
    constructor(args?: Partial<PyWebViewApi>);
    generate_random_number_array(length?: number): Promise<number[]>;
    save_content(content: string): Promise<any>;
    toggle_fullscreen(): Promise<any>;
    static createInstance(args?: Partial<PyWebViewApi>): Promise<PyWebViewApi>;
}
export type PyWebViewApiType = PyWebViewApi;

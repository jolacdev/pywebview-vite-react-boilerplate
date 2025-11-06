export declare class dict {
    args?: any;
    kwargs?: any;
    constructor(args: any, kwargs: any);
}
export declare function createdict(options?: Partial<dict>): dict;
export declare class PyWebViewApi {
    private _instanceId?;
    constructor(args?: Partial<PyWebViewApi>);
    generate_random_number_array(length?: number): Promise<number[]>;
    get_system_info(): Promise<SystemInfo>;
    save_content(content: string): Promise<any>;
    toggle_fullscreen(): Promise<any>;
    static createInstance(args?: Partial<PyWebViewApi>): Promise<PyWebViewApi>;
}
export type PyWebViewApiType = PyWebViewApi;
export declare class SystemInfo {
    private _instanceId?;
    os: string;
    version: string;
    hostname: string;
    constructor(args?: Partial<SystemInfo>);
    static createInstance(args?: Partial<SystemInfo>): Promise<SystemInfo>;
}
export type SystemInfoType = SystemInfo;

import { WebPlugin } from '@capacitor/core';
import type { ExamplePlugin } from './definitions';
export declare class ExampleWeb extends WebPlugin implements ExamplePlugin {
    echo(options: {
        plist: string;
        key: string;
    }): Promise<{
        plist: string;
        key: string;
        value: string;
    }>;
}

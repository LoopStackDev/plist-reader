import { WebPlugin } from '@capacitor/core';

import type { ExamplePlugin } from './definitions';

export class ExampleWeb extends WebPlugin implements ExamplePlugin {
  async echo(options: { plist: string, key: string }): Promise<{ plist: string, key: string, value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

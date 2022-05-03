export interface ExamplePlugin {
  echo(options: { plist: string, key: string }): Promise<{ plist: string, key: string, value: string }>;
}

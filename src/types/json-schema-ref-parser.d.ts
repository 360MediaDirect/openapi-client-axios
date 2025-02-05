declare module '@360mediadirect/json-schema-ref-parser/lib/dereference' {
  import $RefParserOptions from '@360mediadirect/json-schema-ref-parser/lib/options';
  import RefParser from '@360mediadirect/json-schema-ref-parser';

  export default function dereference(api: RefParser, options: $RefParserOptions): string;
}

declare module '@360mediadirect/json-schema-ref-parser/lib/options' {
  import { Options } from '@360mediadirect/json-schema-ref-parser/lib';

  type OptionsRequired = { [K in keyof Options]-?: Options[K] };

  interface $RefParserOptions extends OptionsRequired {}
  class $RefParserOptions {
    constructor(options: object | Options);
  }

  export = $RefParserOptions;
}

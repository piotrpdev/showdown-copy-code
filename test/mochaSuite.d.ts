import { Converter } from 'showdown';

declare module "mocha" {
  export interface Suite {
    converter: Converter;
    withHljsConverter: Converter;
    withHljsWithPreConverter: Converter;
    withHljsReverseConverter: Converter;
  }
}
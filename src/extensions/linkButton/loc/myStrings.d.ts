declare interface ILinkButtonCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'LinkButtonCommandSetStrings' {
  const strings: ILinkButtonCommandSetStrings;
  export = strings;
}

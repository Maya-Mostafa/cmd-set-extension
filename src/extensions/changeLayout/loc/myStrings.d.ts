declare interface IChangeLayoutCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'ChangeLayoutCommandSetStrings' {
  const strings: IChangeLayoutCommandSetStrings;
  export = strings;
}

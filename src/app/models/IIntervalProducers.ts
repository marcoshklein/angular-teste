// Generated by https://quicktype.io

export interface IInterval {
  min: Producer[];
  max: Producer[];
}

export interface Producer {
  producer:     string;
  interval:     number;
  previousWin:  number;
  followingWin: number;
}

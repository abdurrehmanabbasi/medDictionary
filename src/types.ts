export interface IResult {
  art: {
    artid: string;
    capt: string;
  };
  meta: {
    id: string;
    uuid: string;
    sort: string;
    src: string;
    section: string;
    stems: string[];
    offensive: boolean;
  };
  hom: number;
  hwi: {
    hw: string;
    prs: {
      mw: string;
      sound: {
        audio: string;
      };
    }[];
  };
  fl: string;
  def: {
    sseq: [
      [
        [
          string,
          {
            sn: string;
            dt: [[string, string]];
            sdsense?: {
              sd: string;
              dt: [[string, string]];
            };
          }
        ]
      ]
    ][];
  }[];
  shortdef: string[];
}

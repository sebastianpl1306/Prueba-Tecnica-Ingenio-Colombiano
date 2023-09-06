export interface User {
    id:        number;
    firstName: string;
    lastName:  string;
    email:     string;
    status:    boolean;
    birthday?:  Date;
    skills?:    string[];
    avatar?:    Avatar[];
}

export interface Avatar {
    name:    string;
    percent: number;
    size:    number;
    status:  Status;
    type:    Type;
    uid:     Uid;
    url:     string;
}

export enum Status {
    Done = "done",
}

export enum Type {
    ImageJPEG = "image/jpeg",
}

export enum Uid {
    RCUpload1694002100168 = "rc-upload-1694002100168",
    RCUpload1694002100169 = "rc-upload-1694002100169",
    RCUpload1694002100170 = "rc-upload-1694002100170",
}
export type task = {
    id?: number;         // 登録前はIDがないため、オプション(?)にする
    title: string;
    content: string;
    delflg: boolean;
    compflg: boolean;
    newdate: string;
    newtime: string;
    updtime: string;
}
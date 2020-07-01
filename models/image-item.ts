export interface IImageItem {
    name: string;
    data: string;
}

export class ImageItem implements IImageItem {
    name: string;
    data: string;
    constructor () {}
}
import { Image } from "./TSInterfaces/Image";
import { ImageObject } from "./TSInterfaces/ImageObject";

export class Model {
  selected: number;
  data: ImageObject;

  constructor(imgList: Image[]) {
    this.data = this.getImageDataObject(imgList);
    this.selected = 0;
  }

  getImageDataObject(imgList: Image[]): ImageObject {
    return imgList.reduce((acc: ImageObject, cur: Image): ImageObject => {
      acc[cur.id] = cur;
      return acc;
    }, {});
  }

  getImageData(): ImageObject {
    return this.data;
  }

  getSelected(): number {
    return this.selected;
  }

  updateSelectedImage(id: number): void {
    this.selected = id;
  }

  updateCaption(newCaption: string): void {
    this.data[this.selected].caption = newCaption;
  }
}

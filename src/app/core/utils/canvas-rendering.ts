import { CanvasCore } from './canvas-core';
import { CanvasUtils } from './canvas-utils';

export class CanvasRendering {
  constructor(
    private core: CanvasCore,
    private utils: CanvasUtils,
  ) {}

  public asOriginal(image: HTMLImageElement): void {
    if (!this.core.canvasContext) return;

    const [xPos, yPos] = this.utils.getCenter(image);

    this.core.canvasContext.drawImage(image, xPos, yPos, image.width, image.height);
  }

  public asFill(image: HTMLImageElement): void {
    if (!this.core.canvasContext || !this.core.pageDims) return;

    this.core.canvasContext.drawImage(
      image,
      0,
      0,
      this.core.pageDims.width,
      this.core.pageDims.height,
    );
  }

  public asContain(image: HTMLImageElement): void {
    if (!this.core.canvas || !this.core.canvasContext || !this.core.pageDims) return;

    const widthScale = this.core.pageDims.width / image.width;
    const heightScale = this.core.pageDims.height / image.height;

    const scale = Math.min(widthScale, heightScale);

    const newWidth = image.width * scale;
    const newHeight = image.height * scale;

    const [xPos, yPos] = this.utils.getCenter(image, newWidth, newHeight);

    this.core.canvasContext.drawImage(image, xPos, yPos, newWidth, newHeight);
  }
}

import { Dimensions } from '@core/models/interface/global.interface';
import { CanvasCore } from './canvas-core';

export class CanvasUtils {
  constructor(private core: CanvasCore) {}

  public setScale() {
    if (!this.core.canvas || !this.core.canvasContext || !this.core.pageDims) return;

    const widthScale = this.core.canvas.width / this.core.pageDims.width;
    const heightScale = this.core.canvas.height / this.core.pageDims.height;
    this.core.canvasContext.scale(widthScale, heightScale);
  }

  public validatePageDims(): void {
    if (this.core.isPortrait || this.core.isPortrait === undefined || !this.core.pageDims) return;
    [this.core.pageDims.width, this.core.pageDims.height] = [
      this.core.pageDims.height,
      this.core.pageDims.width,
    ];
  }

  public setCanvasDims(canvasDims: Dimensions): void {
    if (!this.core.canvas || this.core.isPortrait === undefined) return;

    this.core.canvas.width = this.core.isPortrait ? canvasDims.width : canvasDims.height;
    this.core.canvas.height = this.core.isPortrait ? canvasDims.height : canvasDims.width;
  }

  public getCenter(image: HTMLImageElement, width?: number, height?: number): [number, number] {
    if (!this.core.pageDims) return [0, 0];

    width ??= image.width;
    height ??= image.height;

    const xPos = (this.core.pageDims.width - width) / 2;
    const yPos = (this.core.pageDims.height - height) / 2;
    return [xPos, yPos];
  }
}

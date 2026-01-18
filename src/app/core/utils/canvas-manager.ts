import { CanvasCore } from './canvas-core';
import { CanvasUtils } from './canvas-utils';
import { CanvasRendering } from './canvas-rendering';

export class CanvasManager {
  public core: CanvasCore;
  public utils: CanvasUtils;
  public renderImage: CanvasRendering;

  constructor() {
    this.core = new CanvasCore();
    this.utils = new CanvasUtils(this.core);
    this.renderImage = new CanvasRendering(this.core, this.utils);
  }
}

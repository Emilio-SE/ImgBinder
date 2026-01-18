import { Dimensions } from "@core/models/interface/global.interface";

export class CanvasCore {
  private _canvas: HTMLCanvasElement | undefined;
  private _canvasContext: CanvasRenderingContext2D | null = null;
  private _pageDims: Dimensions | undefined;
  private _isPortrait: boolean | undefined;

  public set canvas(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
  }

  public get canvas(): HTMLCanvasElement | undefined {
    return this._canvas;
  }

  public set canvasContext(ctx: CanvasRenderingContext2D | null) {
    this._canvasContext = ctx;
  }

  public get canvasContext(): CanvasRenderingContext2D | null {
    return this._canvasContext;
  }

  public set pageDims(pageDims: Dimensions) {
    this._pageDims = pageDims;
  }

  public get pageDims(): Dimensions | undefined {
    return this._pageDims;
  }

  public set isPortrait(isPortrait: boolean) {
    this._isPortrait = isPortrait;
  }

  public get isPortrait(): boolean | undefined {
    return this._isPortrait;
  }
}

import { ImageSize } from '../enum/image.enum';

export interface RawImage {
  blobUrl: string;
  file: File;
  relativePath: string;
}

export interface Image extends RawImage {
  config: ImageConfig;
}

export interface ImageConfig {
  rotation: number;
  size: ImageSize;
  width: number;
  height: number;
}

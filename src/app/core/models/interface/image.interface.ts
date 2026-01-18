import { ImageSize } from '../enum/image.enum';

export interface RawImage {
  blobUrl: string;
  file: File;
  relativePath: string;
}

export interface Image {
  data: ImageData;
  config: ImageConfig;
}

export interface ImageData extends RawImage {
  readonly id: string;
  width: number;
  height: number;
}

export interface ImageConfig {
  general: GeneralImageConfig;
  imageLocalDesign: PreferedImageDesignConfig;
}

export interface GeneralImageConfig {
  useLocalDesign: boolean;
}

export interface ImageDesignConfig {
  rotation: number;
  size: ImageSize;
  width?: number;
  height?: number;
}

export interface PreferedImageDesignConfig {
  rotation?: number;
  size?: ImageSize;
  width?: number;
  height?: number;
}

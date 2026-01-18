import { Orientation, Unit } from '../enum/document.enum';
import { PageSize } from '../enum/page.enum';
import { Image } from './image.interface';

export interface Page {
  image: Image;
  config: PageConfig;
}

export interface PageConfig {
  general: GeneralPageConfig;
  pageLocalDesign: PageDesignConfig;
}

export interface GeneralPageConfig {
  useLocalDesign: boolean;
  unit?: Unit;
}

export interface PageDesignConfig {
  orientation?: Orientation;
  margin?: PageMargin;
  size?: PageSize;
  width?: number;
  height?: number;
}

export interface PageMargin {
  Left: number;
  Top: number;
  Right: number;
  Bottom: number;
}

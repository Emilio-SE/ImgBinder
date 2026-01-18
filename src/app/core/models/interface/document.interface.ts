import { Orientation, Unit } from '../enum/document.enum';
import { PageSize } from '../enum/page.enum';
import { ImageDesignConfig } from './image.interface';
import { PageMargin, Page } from './page.interface';

export interface Document {
  config: DocumentConfig;
  page: Page[];
}

export interface DocumentConfig {
  metadata: Metadata;
  general: GeneralDocumentConfig;
  documentDesign: DocumentDesignConfig;
  imageDesign: ImageDesignConfig;
}

export interface Metadata {
  Title: string;
  Author: string;
  Keywords: string | undefined;
}

export interface DocumentDesignConfig {
  orientation: Orientation;
  margin: PageMargin;
  size: PageSize;
  width: number;
  height: number;
}

export interface GeneralDocumentConfig {
  unit: Unit;
}

import { PageSerieA } from '../const/page-serie-A.const';
import { Orientation, Unit } from '../enum/document.enum';
import { ImageSize } from '../enum/image.enum';
import { PageSize } from '../enum/page.enum';
import { Document } from '../interface/document.interface';
import { Image } from '../interface/image.interface';
import { Page } from '../interface/page.interface';

export function defaultDocument(): Document {
  return {
    config: {
      metadata: {
        Title: '',
        Author: '',
        Keywords: '',
      },
      general: {
        unit: Unit.Point,
      },
      documentDesign: {
        orientation: Orientation.Portrait,
        margin: {
          Left: 0,
          Top: 0,
          Right: 0,
          Bottom: 0,
        },
        size: PageSize.Serie,
        ...PageSerieA.A4,
      },
      imageDesign: {
        rotation: 0,
        size: ImageSize.Original,
      },
    },
    page: [],
  };
}

export function defaultPage(): Page {
  return {
    config: {
      pageLocalDesign: {},
      general: {
        useLocalDesign: false,
      },
    },
    image: defaultImage(),
  };
}

export function defaultImage(): Image {
  const isoDate: string = new Date(Date.now()).toISOString();
  const date: string = isoDate.substring(0, 10).replaceAll('-', '');
  const time: string = isoDate.substring(11, 19).replaceAll(':', '');
  const ms: string = isoDate.substring(20, 23);
  const randomString: string = Math.random().toString(36).substring(2, 9);

  return {
    data: {
      blobUrl: '',
      file: new File([], ''),
      relativePath: '',
      width: 0,
      height: 0,
      id: `img-${date}-${time}-${ms}-${randomString}`,
    },
    config: {
      general: {
        useLocalDesign: false,
      },
      imageLocalDesign: {},
    },
  };
}

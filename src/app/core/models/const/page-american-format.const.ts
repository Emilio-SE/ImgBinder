import { Dimensions } from '../interface/global.interface';
import { PageSizes } from 'pdf-lib'

export class PageSerieA {
   static EXECUTIVE: Readonly<Dimensions> = {
    width: PageSizes.Executive[0],
    height: PageSizes.Executive[1],
  };

   static FOLIO: Readonly<Dimensions> = {
    width: PageSizes.Folio[0],
    height: PageSizes.Folio[1],
  };

   static LEGAL: Readonly<Dimensions> = {
    width: PageSizes.Legal[0],
    height: PageSizes.Legal[1],
  };

   static LETTER: Readonly<Dimensions> = {
    width: PageSizes.Letter[0],
    height: PageSizes.Letter[1],
  };

   static TABLOID: Readonly<Dimensions> = {
    width: PageSizes.Tabloid[0],
    height: PageSizes.Tabloid[1],
  };
}

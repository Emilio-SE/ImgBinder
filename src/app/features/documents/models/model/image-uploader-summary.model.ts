import { ImageUploaderSummary } from '../interface/image-uploader.interface';

export class ImageUploaderControlSummary {
  private imageSuccesses: number = 0;
  private imageErrors: number = 0;
  private imageErrorNames: string[] = [];
  private folderSuccesses: number = 0;
  private folderErrors: number = 0;
  private folderErrorNames: string[] = [];

  public summary(): ImageUploaderSummary {
    return {
      ImageSuccess: this.imageSuccesses,
      ImageError: this.imageErrors,
      ImageErrorName: this.imageErrorNames,
      FolderSuccess: this.folderSuccesses,
      FolderError: this.folderErrors,
      FolderErrorName: this.folderErrorNames,
    };
  }

  public imageSuccess(): void {
    this.imageSuccesses++;
  }

  public imageError(imageName: string): void {
    this.imageErrors++;
    this.imageErrorNames.push(imageName);
  }

  public folderSuccess(): void {
    this.folderSuccesses++;
  }

  public folderError(folderName: string): void {
    this.folderErrors++;
    this.folderErrorNames.push(folderName);
  }
}

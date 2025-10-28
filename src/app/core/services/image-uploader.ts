import { Injectable } from '@angular/core';
import { RawImageUploaded } from '@features/documents/models/alias/image-uploader.alias';
import { RawImage } from '@core/models/interface/image.interface';
import { ImageUploaderControlSummary } from '@features/documents/models/model/image-uploader-summary.model';

@Injectable({
  providedIn: 'root',
})
export class ImageUploader {
  private acceptedFormats = ['image/jpeg', 'image/png', 'image/jpg'];

  get validFormats(): string[] {
    return this.acceptedFormats;
  }

  public isValidFileType(file: File): boolean {
    return this.acceptedFormats.includes(file.type);
  }

  public async drop(
    event: DragEvent
  ): Promise<RawImageUploaded> {
    const items = event.dataTransfer?.items;
    const summary: ImageUploaderControlSummary = new ImageUploaderControlSummary();

    if (!items) return;

    const filePromises: Promise<RawImage[]>[] = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i].webkitGetAsEntry();
      if (item) {
        filePromises.push(this.traverseFileTree(item, '', summary));
      }
    }

    const results = await Promise.all(filePromises);

    return [results.flat(), summary];
  }

  public async upload(
    files: FileList
  ): Promise<RawImageUploaded> {
    const summary: ImageUploaderControlSummary = new ImageUploaderControlSummary();
    const filePromises: Promise<RawImage[]>[] = [];

    for (let index = 0; index < files.length; index++) {
      filePromises.push(this.processFile(files[index], '', summary));
    }

    const results = await Promise.all(filePromises);

    return [results.flat(), summary];
  }

  private async traverseFileTree(
    item: FileSystemEntry,
    path: string,
    summary: ImageUploaderControlSummary
  ): Promise<RawImage[]> {
    if (item.isFile) {
      return this.handleFileEntry(item as FileSystemFileEntry, path, summary);
    }

    if (item.isDirectory) {
      return this.handleDirectoryEntry(item as FileSystemDirectoryEntry, path, summary);
    }

    return [];
  }

  private async handleFileEntry(
    fileEntry: FileSystemFileEntry,
    path: string,
    summary: ImageUploaderControlSummary
  ): Promise<RawImage[]> {
    return new Promise((resolve) => {
      fileEntry.file(
        async (file: File) => {
          const result = await this.processFile(file, path, summary);
          resolve(result);
        },
        () => {
          summary.imageError(path + 'image_no_uploaded');
          resolve([]);
        }
      );
    });
  }

  private async processFile(
    file: File,
    path: string,
    summary: ImageUploaderControlSummary
  ): Promise<RawImage[]> {
    const relativePath = path + file.name;

    if (!this.isValidFileType(file)) {
      summary.imageError(relativePath);
      return [];
    }

    return this.convertFileToRawImage(file, relativePath, summary);
  }

  private async convertFileToRawImage(
    file: File,
    relativePath: string,
    summary: ImageUploaderControlSummary
  ): Promise<RawImage[]> {
    const blobUrl = URL.createObjectURL(file);

    const imageData: RawImage = {
      blobUrl,
      file,
      relativePath,
    };

    summary.imageSuccess();
    return [imageData];
  }

  private async handleDirectoryEntry(
    dirEntry: FileSystemDirectoryEntry,
    path: string,
    summary: ImageUploaderControlSummary
  ): Promise<RawImage[]> {
    return new Promise((resolve) => {
      const dirReader = dirEntry.createReader();

      dirReader.readEntries(
        async (entries: FileSystemEntry[]) => {
          const result = await this.processDirectoryEntries(entries, dirEntry.name, path, summary);
          resolve(result);
        },
        () => {
          summary.folderError(path + 'folder_no_uploaded');
          resolve([]);
        }
      );
    });
  }

  private async processDirectoryEntries(
    entries: FileSystemEntry[],
    dirName: string,
    path: string,
    summary: ImageUploaderControlSummary
  ): Promise<RawImage[]> {
    const newPath = path + dirName + '/';
    const entryPromises = entries.map((entry) => this.traverseFileTree(entry, newPath, summary));

    const results = await Promise.all(entryPromises);

    summary.folderSuccess();
    return results.flat();
  }
}

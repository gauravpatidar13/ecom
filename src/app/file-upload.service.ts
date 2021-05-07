import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { FileUpload } from './file-upload';
import { finalize } from 'rxjs/operators';
import { SharedService } from './shared.service';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  basePath = '/uploads';
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage,
    private ss:SharedService) { }

  pushFileToStorage(fileUpload: FileUpload,cb:boolean): Observable<number> {
    this.basePath=this.basePath+cb?"/profiles":"/products";
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
       if(cb){  this.ss.profileUrl(fileUpload.url);
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);}else{
            this.ss.addProductUrl(fileUpload.url);
          }
        });
      
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }
  saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }
  getFiles(numberItems): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}

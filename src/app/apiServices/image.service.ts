import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from "../models/image.model";
import {ImageInfo} from "../models/image-info";
import {ImageInfoResponse} from "../models/image-info-response";
const baseUrl = 'http://localhost:8091/api/';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImageCount(): Observable<any> {
    return this.http.get(`${baseUrl}getCount/`);
  }
  getImageById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}getImages/${id}`);
  }
  getImageInfo(): Observable<ImageInfoResponse> {
    return this.http.get(`${baseUrl}ImagesInfos/`);
  }

  upload(data: any): Observable<any> {
    return this.http.post(`${baseUrl}upload`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}ImagesAll`);
  }
}

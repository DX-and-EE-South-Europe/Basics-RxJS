import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppInfo, Empty, LastModified, Post } from '../common/interfaces/interfacesJsonServer';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {
  constructor(private _http: HttpClient) {}
  private _url = 'http://localhost:3000';

  //GET
  getPosts$(): Observable<Post[]> {
    return this._http.get<Post[]>(`${this._url}/posts`, {});
  }

  getPost$(id: number): Observable<Post | Empty> {
    return this._http.get<Post>(`${this._url}/posts/${id}`, {});
  }

  getAppInfo$(): Observable<AppInfo | Empty> {
    return this._http.get<AppInfo>(`${this._url}/appInfo`, {});
  }

  //POST
  postPost$(newPost: Post): Observable<Post> {
    return this._http.post<Post>(`${this._url}/posts`, newPost);
  }

  //PUT
  putPost$(updatedPost: Post): Observable<Post> {
    if (updatedPost.id && updatedPost.author && updatedPost.title)
      return this._http.put<Post>(`${this._url}/posts/${updatedPost.id}`, updatedPost);
    else return throwError(() => new Error('Data object Post incorrect'));
  }

  //PATCH
  patchPost$(newPost: Post, id?: number): Observable<Post> {
    const numberPost = id ? id : newPost.id;
    if (!numberPost) return throwError(() => new Error('You have to indicate id post'));
    return this._http.patch<Post>(`${this._url}/posts/${numberPost}`, newPost);
  }

  patchAppInfoLastModified$(lastModified: LastModified): Observable<AppInfo> {
    return this._http.patch<AppInfo>(`${this._url}/appInfo`, lastModified);
  }

  //DELETE
  deletePost$(id: number): Observable<Empty> {
    return this._http.delete<Post>(`${this._url}/posts/${id}`);
  }
}

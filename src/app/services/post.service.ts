import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import Post from "../dto/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient,private fireStoreService:AngularFirestore) { }

  findAll():Observable<any>{
    return  this.http.get<any>(this.baseURL+"/posts")
  }
  find(id:any):Observable<any>{
    return  this.http.get<any>(this.baseURL+"/posts?id="+id)
  }
  createDataFireStore(post:Post){
    return new Promise((resolve,reject)=>{
      this.fireStoreService.collection('post-data').add(post).then(response=>{
        console.log(response)
      },error=>{
        console.log(error)
      });
    })

  }
  // create(id:any,userId:any,title:any,body:any):Observable<any>{
  //   return  this.http.post<any>(this.baseURL+"/posts",{
  //     id,userId,title,body
  //   })
  // }
  update(id:any, userId:any,title:any ,body:any):Observable<any>{
    return  this.http.put<any>(this.baseURL+"/posts",{
      id,userId,title,body
    })
  }
  delete(id:any):Observable<any>{
    return  this.http.get<any>(this.baseURL+"/posts/"+id)
  }
}

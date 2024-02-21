import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildI } from '../models/build-i';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildService {
  public arr_builds : BuildI[] = [];


  constructor(private http : HttpClient) { }

  getAllbuilds() : Observable<BuildI[]>{
    return this.http.get<BuildI[]>('http://localhost:8080/builds')
    // .subscribe({
    //   next : (data : BuildI[]) => {
    //     this.arr_builds = data;
    //   },
    //   error : (err) => {
    //     console.log(err);
    //   },
    //   complete : () => {
    //     console.log('Get all builds completed');
    //   }
    // });
  }

  getBuildById(id : string) : Observable<BuildI> {
    return this.http.get<BuildI>('http://localhost:8080/build/' + id);
  }

  getBuildByUserId(idUser : string) : Observable<BuildI[]> {
    console.log("Get build by user id", idUser);

    return this.http.get<BuildI[]>('http://localhost:8080/builds/user/' + idUser);

  }



  createBuild(buildForm : any) : Observable<BuildI>{
    console.log("Build created");
    return this.http.post<BuildI>('http://localhost:8080/generateBuild', buildForm);
  }
}

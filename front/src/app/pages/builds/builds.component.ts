import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildI } from 'src/app/shared/models/build-i';
import { ActionService } from 'src/app/shared/services/action.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BuildService } from 'src/app/shared/services/build.service';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent {
  arr_builds : BuildI[] = [];
  levelFilter: number[] = [0, 230];
  toShow: number = 20;
  nameBuild : string = '';
  costFilter : string = 'all';
  effectsFilter : number[] = [];

  constructor(public builds : BuildService, public actions : ActionService, private activeRoute : ActivatedRoute, private auth : AuthService) {
    this.activeRoute.url.subscribe({
      next : (data) => {
        console.log('Url : ', data);
        if (data[0].path == 'liste-builds') {
          this.builds.getAllbuilds().subscribe({
            next : (data : BuildI[]) => {
              console.log('Data : ', data);

              this.arr_builds = data;
            },
            error : (err) => {
              console.log(err);
            },
            complete : () => {
              console.log('Get all builds completed');
            }
          });
        }else if(data[0].path == 'mesBuilds') {
          console.log('Mes builds');
          this.builds.getBuildByUserId(this.auth.user.id).subscribe({
            next : (data : BuildI[]) => {
              console.log('Data : ', data);
              this.arr_builds = data;
            },
            error : (err) => {
              console.log(err);
            },
            complete : () => {
              console.log('Get all builds completed');
            }
          });
        }
      },
      error : (err) => {
        console.log(err);
      },
      complete : () => {
        console.log('Url completed');
      }
    });
   }

  ngOnInit() {
    // this.actions.getAllActions();
    // this.builds.getAllbuilds();
  }

  //Permet de faire du lazy loading
  onScroll(event: any) {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // Le scroll a atteint le bas
      console.log('Scroll down detected!');
      this.toShow += 20;
    }
  }

  resetEffectFilter() {
    this.effectsFilter = [];
  }

}

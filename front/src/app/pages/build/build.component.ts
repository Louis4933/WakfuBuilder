import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Models
import { BuildI } from 'src/app/shared/models/build-i';

//Services
import { ActionService } from 'src/app/shared/services/action.service';
import { BuildService } from 'src/app/shared/services/build.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent {
  build !: BuildI;
  param !: string;


  constructor(public activeRoute : ActivatedRoute, public buildService : BuildService, public action : ActionService, private route : Router) {
    this.param = this.activeRoute.snapshot.paramMap.get('buildId') || '';
    console.log('params : ', this.param);
    this.action.getAllActions();
    this.buildService.getBuildById(this.param).subscribe({
      next : (data : BuildI) => {
        if (data == null) {
          console.log('Build not found');
          this.route.navigate(['/liste-builds']);
        }
        this.build = data;
      },
      error : (err) => {
        console.log(err);
        this.route.navigate(['/liste-builds']);
      },
      complete : () => {
        console.log('Get build completed');
      }
    });
   }

  ngOnInit(): void {
  }

  getInt(value : string) {
    return parseInt(value);
  }

}

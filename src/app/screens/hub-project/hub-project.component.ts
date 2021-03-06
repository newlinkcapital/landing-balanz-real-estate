import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { descriptionData, faqHUB, responsibleData, resumeList, scrollSpyMenu, timelineProjectData, urlVideo } from 'src/app/constants/hub-project';
import { Project } from 'src/app/constants/project';
import { encodeURL } from 'src/app/helpers/encodeURI';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-hub-project',
  templateUrl: './hub-project.component.html',
  styleUrls: ['./hub-project.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HubProjectComponent implements OnInit {

  data:Project;
  error:boolean;
  loading:boolean = true;

  scrollSpyMenu = scrollSpyMenu;
  resumeList = resumeList;
  timelineProjectData = timelineProjectData;
  responsibleData = responsibleData;
  videoProjectData = urlVideo;
  faqProject = faqHUB;

  signIn:string = "https://clientes.balanz.com/?utm_source=landingcrowdium&utm_medium=cta&utm_campaign=hub-cabildo"
  signUp:string = "https://balanz.com/abrir-cuenta-2.aspx/?utm_source=landingcrowdium&utm_medium=cta&utm_campaign=hub-cabildo"

  constructor(private projectS: ProjectsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.projectS.getProjects().subscribe((data:Project[]) => {
      this.data = data.filter(obj => {
        return obj.Slug === 'hub-cabildo';
      })[0];
      if(this.data === undefined){
        this.router.navigateByUrl('/404', { skipLocationChange: true})
      }
      this.loading = false;
    }, err => console.log(err))
  }

  getDescription(){
    //return this.data.Descripcion;
    return descriptionData;
  }

  handleInvestment(value:string){
    if(this.data.Estado.Tipo === 1){
      window.open(value, '_top');
    }
  }

}

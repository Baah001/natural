import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onNavigate(context) {
    console.log(context);
    if(context === 'intro') {
      this.router.navigate(['presentation'], {relativeTo: this.activatedRoute.parent});
    } else {
      // this.router.navigate(['demo'], {relativeTo: this.activatedRoute.parent});
    }
  }

}

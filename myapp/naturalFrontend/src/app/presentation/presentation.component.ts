import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {NavigationService} from './navigation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  nextPath: string;
  previousPath: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.router.navigate(['myths'], {relativeTo: this.activatedRoute});
    this.nextPath = this.navigationService.getNextPage();
    this.previousPath = this.navigationService.getPreviousPage();
  }

  onNavigate() {
    console.log(this.nextPath);
    this.router.navigate([this.nextPath], {relativeTo: this.activatedRoute});
  }

  OnNavigateBack() {
    this.router.navigate([this.previousPath], {relativeTo: this.activatedRoute});
  }
}

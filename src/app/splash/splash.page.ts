import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit, OnDestroy {

  interval!: any;
  backgroundColor: string = '#f0f0f0'; // Establece el color de fondo estático aquí

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => this.router.navigateByUrl('/tabs/tab1'), 2000);
    this.startColorInterval();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startColorInterval() {
    const ionContent = document.querySelector('ion-content');
    ionContent?.style.setProperty('--background', this.backgroundColor);
  }

}

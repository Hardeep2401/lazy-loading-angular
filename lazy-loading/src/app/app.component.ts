import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-loading';
  constructor(private vc: ViewContainerRef,
    private cfr: ComponentFactoryResolver) { }

  async admin() {
    this.vc.clear();
    const { AdminComponent } = await import('./admin/admin/admin.component');
    this.vc.createComponent(
      this.cfr.resolveComponentFactory(AdminComponent)
    )
  }


  async header() {
    this.vc.clear();
    const { HeaderComponent } = await import('./header/header.component');
    this.vc.createComponent(
      this.cfr.resolveComponentFactory(HeaderComponent)
    )
  }

  async footer() {
    this.vc.clear();
    const { FooterComponent } = await import('./footer/footer.component');
    this.vc.createComponent(
      this.cfr.resolveComponentFactory(FooterComponent)
    )
  }

}

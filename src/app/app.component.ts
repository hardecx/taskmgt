import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from './router.animations';
import { ConnectionService } from 'ng-connection-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
})
export class AppComponent  {
  title = 'inventory';
  private previousPath: string = ''
  hasNetworkConnection: any;
  hasInternetAccess: any;
  status: boolean;

  constructor(private connectionService: ConnectionService, private _renderer: Renderer2,) {
    this.connectionService.monitor().subscribe((currentState:any) => {
      this.hasNetworkConnection = currentState.hasNetworkConnection;
      this.hasInternetAccess = currentState.hasInternetAccess;

      if (currentState) {
        this.status = false;
        this._renderer.removeClass(document.body,'bg-gradient');
        document.body.style.filter = 'grayscale(1%)';

      } else {
        this.status = true;

        this._renderer.addClass(document.body,'bg-gradient');
        document.body.style.filter = 'grayscale(100%)';

      }
    });
  }

  getPageTransition(routerOutlet: RouterOutlet):any {
    if (routerOutlet.isActivated) {
      let transitionName = 'section'

      const { path }:any = routerOutlet.activatedRoute.routeConfig
      const isSame = this.previousPath === path
      const isBackward = this.previousPath.startsWith(path)
      const isForward = path.startsWith(this.previousPath)

      if (isSame) {
        transitionName = 'none'
      } else if (isBackward && isForward) {
        transitionName = 'initial'
      } else if (isBackward) {
        transitionName = 'backward'
      } else if (isForward) {
        transitionName = 'forward'
      }

      this.previousPath = path

      return transitionName
    }
  }

}


import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faAddressBook, faBookDead, faBookmark, faBookMedical, faSignal, faCheckSquare, faHome, faMoneyBill, faMoneyBillWaveAlt, faSatellite, faShoppingBasket, faTruckMonster, faTruckMoving, faHourglass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent  {
 icon=faHome;

 Menu: any[] =[];
  constructor(){
    if(sessionStorage.getItem('Menu')==='Task'){
      this.Menu=   [
        {
          title: 'Task Input',
          // icon: 'map',
          link: 'dashboard',
          home: true,
        },
        {
          title: 'Task Update',
          // icon: 'briefcase-outline',
          link: 'table',
        },
        {
          title: 'Monthly Performance Review',
        //  icon: faAddressBook,
          link: 'mpr',
        },
        {
          title: 'Executive Management meeting',
        //  icon: faAddressBook,
          link: 'emm',
        },
        {
          title: 'Other meetings',
        //  icon: faAddressBook,
          link: 'others',
        },

      ]

    }
    if( sessionStorage.getItem('PWFName')==='Admin' && sessionStorage.getItem('Menu')==='Client'){
      this.Menu=   [
        {
          title: 'Task Input',
          // icon: 'map',
          link: 'dashboard',
          home: true,
        },
        {
          title: 'Task Update',
          // icon: 'briefcase-outline',
          link: '/table',
        },

      ]

    }
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

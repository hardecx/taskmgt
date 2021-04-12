
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
    // //task input
    // if(sessionStorage.getItem('Email')==='hardecx@yahoo.com') {

    //   this.Menu=   [
    //     {
    //       title: 'Task Input',
    //       // icon: 'map',
    //       link: 'table',
    //     },
    //   ]
    // }





    //reports
    if(sessionStorage.getItem('Email')==='sakintemi@pagefinancials.com') {

      this.Menu=   [
        {
          title: 'Monthly Performance Review',
        //  icon: faAddressBook,
          link: 'mpr',
        },
        {
          title: 'Executive Management Meeting',
        //  icon: faAddressBook,
          link: 'emm',
        },
        {
          title: 'Other Tasks',
        //  icon: faAddressBook,
          link: 'others',
        }
      ]
    }
    if(sessionStorage.getItem('Email')==='rogunsipe@pagefinancials.com') {

      this.Menu=   [
        {
          title: 'Monthly Performance Review',
        //  icon: faAddressBook,
          link: 'mpr',
        },
        {
          title: 'Executive Management Meeting',
        //  icon: faAddressBook,
          link: 'emm',
        },
        {
          title: 'Other Tasks',
        //  icon: faAddressBook,
          link: 'others',
        }
      ]
    }
    ///general
    if(sessionStorage.getItem('Email')==='eraimi@pagefinancials.com') {

      this.Menu=   [
        {
          title: 'Task Input',
          // icon: 'map',
          link: 'table',
        },
        {
          title: 'Monthly Performance Review',
        //  icon: faAddressBook,
          link: 'mpr',
        },
        {
          title: 'Executive Management Meeting',
        //  icon: faAddressBook,
          link: 'emm',
        },
        {
          title: 'Other Tasks',
        //  icon: faAddressBook,
          link: 'others',
        }
      ]
    }
    if(sessionStorage.getItem('Email')==='arennaiye@pagefinancials.com') {

      this.Menu=   [
        {
          title: 'Task Input',
          // icon: 'map',
          link: 'table',
        },
        {
          title: 'Monthly Performance Review',
        //  icon: faAddressBook,
          link: 'mpr',
        },
        {
          title: 'Executive Management Meeting',
        //  icon: faAddressBook,
          link: 'emm',
        },
        {
          title: 'Other Tasks',
        //  icon: faAddressBook,
          link: 'others',
        }
      ]
    }
    if(sessionStorage.getItem('Email')==='duwaifo@pagefinancials.com') {

      this.Menu=   [
        {
          title: 'Task Input',
          // icon: 'map',
          link: 'table',
        },
        {
          title: 'Monthly Performance Review',
        //  icon: faAddressBook,
          link: 'mpr',
        },
        {
          title: 'Executive Management Meeting',
        //  icon: faAddressBook,
          link: 'emm',
        },
        {
          title: 'Other Tasks',
        //  icon: faAddressBook,
          link: 'others',
        }
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

import {Injectable} from '@angular/core';
import {LinksToConnect} from '../model/LinksToConnect';

@Injectable()
export class InfoService {

  email = 'Komdosh@yandex.ru';
  phone = '+7-911-113-60-09';
  nickname = 'Komdosh';

  linksToConnect: Array<LinksToConnect> = [
    {
      link: 'https://vk.com/komdosh',
      iconClass: 'icon-vk'
    },
    {
      link: 'https://www.facebook.com/komdosh',
      iconClass: 'icon-facebook'
    },
    {
      link: 'https://www.linkedin.com/in/komdosh',
      iconClass: 'icon-linkedin'
    },
    {
      link: 'https://github.com/Komdosh',
      iconClass: 'icon-github'
    },
    {
      link: 'https://ru.stackoverflow.com/users/184435/komdosh',
      iconClass: 'fa fa-stack-overflow'
    },
    {
      link: 'https://t.me/Komdosh',
      iconClass: 'fa fa-telegram'
    },
  ];

  public getEmail() {
    return this.email;
  }

  public getPhone() {
    return this.phone;
  }

  public getLinksToConnect() {
    return this.linksToConnect;
  }

  public getNickname() {
    return this.nickname;
  }
}

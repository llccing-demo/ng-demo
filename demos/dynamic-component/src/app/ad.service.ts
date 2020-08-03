import { Injectable } from '@angular/core';

import { HeroJobAddComponent } from './hero-job-add.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {
        name: '张三',
        bio: '有志者，事竟成！',
      }),
      new AdItem(HeroProfileComponent, {
        name: '李四',
        bio: '失败是成功之母',
      }),
      new AdItem(HeroJobAddComponent, {
        headline: '前端招聘啦',
        body: '找一个高级前端',
      }),
      new AdItem(HeroJobAddComponent, {
        headline: '全栈招聘啦',
        body: '招一个全栈工程师',
      }),
    ];
  }
}

import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../../molecules/tab/tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  activeTabIndex = 0;

  ngAfterContentInit() {
    this.selectTab(0);
  }

  selectTab(index: number): void {
    this.activeTabIndex = index;
    this.tabs.forEach((tab, i) => tab.active = i === index);
  }
}

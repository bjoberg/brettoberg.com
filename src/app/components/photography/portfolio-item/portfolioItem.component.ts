// External
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Local
import { PortfolioItem } from '../../../models/PortfolioItem.model';
import { PhotographyPortfolios } from '../../../config/photographyPortfolios.config';

@Component({
  selector: 'portfolio-item-component',
  templateUrl: './portfolioItem.component.html',
  styleUrls: ['./portfolioItem.component.scss']
})

export class PortfolioItemComponent {
  private isLoading: Boolean;
  private portfolioGroupRoute: String;
  private portfolioItemRoute: String;
  private portfolioItem: PortfolioItem;
  private nextPortfolioItemRoute: String;
  private prevPortfolioItemRoute: String;

  constructor(private route: ActivatedRoute) { 
    this.isLoading = true;
  }

  ngOnInit() {
    // Get the route parameters
    this.route.params.subscribe((params) => this.portfolioGroupRoute = params.portfolioGroup);
    this.route.params.subscribe((params) => this.portfolioItemRoute = params.portfolioItem);

    // Build the view
    this.loadPortfolioItem(this.portfolioGroupRoute, this.portfolioItemRoute);
    this.getNextPortfolioItemRoute(this.portfolioGroupRoute, this.portfolioItemRoute);
    this.getPrevPortfolioItemRoute(this.portfolioGroupRoute, this.portfolioItemRoute);

    // Stop loading the page
    this.isLoading = false;
  }

  private loadPortfolioItem(groupRoute, itemRoute) {
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var group = PhotographyPortfolios[i];
      if (group.route == groupRoute) {
        for (var n = 0; n < group.items.length; n++) {
          var item = group.items[n]; 
          if (item.route == itemRoute) {
            this.portfolioItem = new PortfolioItem(item.title, item.imageUrl, item.route);
          }
        }
      }
    }
  }

  private getNextPortfolioItemRoute(groupRoute, currItem) {
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var group = PhotographyPortfolios[i];
      if (group.route == groupRoute) {
        for (var n = 0; n < group.items.length; n++) {
          var item = group.items[n]; 
          if (item.route == currItem) {
            if (n != (group.items.length - 1)) {
              this.nextPortfolioItemRoute = group.items[n+1].route;
            }
          }
        }
      }
    }
  }

  private getPrevPortfolioItemRoute(groupRoute, currItem) {
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var group = PhotographyPortfolios[i];
      if (group.route == groupRoute) {
        for (var n = 0; n < group.items.length; n++) {
          var item = group.items[n]; 
          if (item.route == currItem) {
            if (n != 0) {
              this.prevPortfolioItemRoute = group.items[n-1].route;
            }
          }
        }
      }
    }
  }
}
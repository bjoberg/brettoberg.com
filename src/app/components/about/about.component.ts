// External
import { Component } from '@angular/core';

// Internal
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  // About
  private avatar;
  private descriptionLong;
  private descriptionShort;
  private email;
  private location;
  private currently;

  // Social media
  private social;

  // Skills
  private skills;

  // Recognition
  private recognition;

  constructor() {
    // Configure about data
    this.avatar = UserConfig.about.avatar;
    this.descriptionLong = UserConfig.about.description_long;
    this.descriptionShort = UserConfig.about.description_short;
    this.email = UserConfig.about.email;
    this.location = UserConfig.about.location;
    this.currently = UserConfig.about.currently;

    // Configure social data
    this.social = UserConfig.social;

    // Configure skills data
    this.skills = UserConfig.skills;
    
    // Configure recognition data
    this.recognition = UserConfig.recognition;
  }
}
import { Component } from '@angular/core';

// Local
import { SoftwareProject } from '../../models/SoftwareProject';
import { PhotographyProject } from '../../models/PhotographyProject';
import { Extra } from '../../models/Extra';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  // Member variables
  private title: string;
  private subtitle: string;
  private softwareProjects: [SoftwareProject];
  private photographyProjects: [PhotographyProject];
  private email: string;
  private extras: [Extra];

  // Lifecycle methods
  constructor() {
    // Set console message
    console.log("%cHello and welcome to the brettoberg.com site console.\nI hope you enjoy the site :)", 'color: #000; line-height: 35px; font-size: 25px;');
    
    // Set title and subtitle
    this.title = "Brett Oberg";
    this.subtitle = "Student. Software Engineer. Photographer.";

    // Add my software projects
    this.softwareProjects = [new SoftwareProject("BrettOberg.com", new URL("http://www.brettoberg.com/"))];
    this.softwareProjects.push(new SoftwareProject("Kolours", new URL("https://bjoberg.github.io/kolours/")));
    this.softwareProjects.push(new SoftwareProject("Presence of Energy", new URL("https://www.presenceofenergy.com/")));

    // Add my photography projects
    this.photographyProjects = [new PhotographyProject("Featured", new URL("https://500px.com/bjoberg/galleries/featured"))];
    this.photographyProjects.push(new PhotographyProject("Southeast Asia", new URL("https://500px.com/bjoberg/galleries/southeast-asia")));
    this.photographyProjects.push(new PhotographyProject("Wisconsin Winter", new URL("https://500px.com/bjoberg/galleries/wisconsin-winter")));
    this.photographyProjects.push(new PhotographyProject("More...", new URL("https://500px.com/bjoberg/galleries")));

    // Set email
    this.email = "brett@obergmail.com";

    // Add my extras
    this.extras = [new Extra("Resume", new URL("https://drive.google.com/file/d/0B4i30BX81iQGUldkdENTZXNucEk/view?usp=sharing"), "<i class='fa fa-file-text-o fa-lg' aria-hidden='true'></i>")];
    this.extras.push(new Extra("Github", new URL("https://github.com/bjoberg"), "<i class='fa fa-github fa-lg' aria-hidden='true'></i>"));
    this.extras.push(new Extra("Instagram", new URL("https://www.instagram.com/brett.oberg/"), "<i class='fa fa-instagram fa-lg' aria-hidden='true'></i>"));
    this.extras.push(new Extra("500px", new URL("https://500px.com/bjoberg"), "<i class='fa fa-500px fa-lg' aria-hidden='true'></i>"));
  }

  // Accessor methods
  public getTitle(): string {
    return this.title;
  }

  public setTitle(text: string) {
    this.title = text;
  }

  public getSubTitle(): string {
    return this.subtitle;
  }

  public setSubTitle(text: string) {
    this.subtitle = text;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(text: string) {
    this.email = text;
  }

  // General class methods  
}
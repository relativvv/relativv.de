import { Component } from '@angular/core';
import {TechModel} from "../../../models/tech.model";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.less']
})
export class TechComponent {

  constructor(private readonly title: Title) {
    this.title.setTitle('relativv.de Portfolio | Tech')
  }

  public pc: TechModel[] = [
    {
      name: "AMD Ryzen 7 7700X",
      href: "https://geizhals.de/amd-ryzen-7-7700x-100-100000591wof-a2801229.html"
    },
    {
      name: "Kingston HyperX Fury DDR5 CL36 32GB",
      href: "https://geizhals.de/kingston-fury-beast-rgb-dimm-kit-32gb-kf556c36bbeak2-32-a2812880.html"
    },
    {
      name: "ASUS ROG AMD RX 6750XT",
      href: "https://geizhals.de/asus-rog-strix-radeon-rx-6750-xt-oc-90yv0hk1-m0na00-a2731650.html"
    },
    {
      name: "Crucial P3 Plus 2TB",
      href: "https://geizhals.de/crucial-p3-plus-ssd-2tb-ct2000p3pssd8-a2761834.html"
    },
    {
      name: "ASRock X670E Pro RS",
      href: "https://geizhals.de/asrock-x670e-pro-rs-a2791725.html"
    },
    {
      name: "be quiet! Pure Loop 2 FX 240mm",
      href: "https://geizhals.de/be-quiet-pure-loop-2-fx-240mm-bw013-a2782458.html"
    },
    {
      name: "be quiet! Straight Power 11 750W",
      href: "https://geizhals.de/be-quiet-straight-power-11-750w-atx-2-4-bn283-a1753718.html"
    },
    {
      name: "be quiet! Pure Base 500FX",
      href: "https://geizhals.de/be-quiet-pure-base-500-fx-schwarz-bgw43-a2774026.html"
    }
  ];

  public software: TechModel[] = [
    {
      name: "Jetbrains IDEs",
      href: "https://www.jetbrains.com/"
    },
    {
      name: "Visual Studio Code",
      href: "https://code.visualstudio.com/"
    },
    {
      name: "Docker Desktop",
      href: "https://www.docker.com/products/docker-desktop/"
    },
    {
      name: "WSL2 (Ubuntu)",
      href: "https://learn.microsoft.com/de-de/windows/wsl/install"
    },
    {
      name: "Windows Terminal",
      href: "https://github.com/microsoft/terminal"
    },
  ]

}

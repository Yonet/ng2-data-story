import { Injectable } from '@angular/core';

class Slide {

  constructor( public content: string, public id:number){

  }
  // toggleState() {
  //   this.state = (this.state === 'active' ? 'inactive' : 'active');
  // }

}

let ALL_SLIDES = [
  "<div>Slide 1</div>",
  "<div>Slide 2</div>",
  "<div>Slide 3</div>"
].map((content, i) => new Slide(content, i))

@Injectable()

export class Slides implements Iterable<Slide> {
  currentSlides: Slide[] = [];

  [Symbol.iterator]() {
    return this.currentSlides.values();
  }

  hasNext() {
    return this.currentSlides.length < ALL_SLIDES.length;
  }

  hasPrev() {
    return this.currentSlides.length > 0;
  }

  next() {
    console.log( "Going forward");
  }

  prev(){
    console.log( "Going back");
  }
  // constructor() { }
  // getSlides() {
  //   return
  // }


}

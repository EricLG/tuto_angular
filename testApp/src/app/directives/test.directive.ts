import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {

  @HostListener('mouseenter')
  private highlight() {
    console.log('Highlight');
  }

  constructor(private ref: ElementRef) {
    console.log(ref);
  }

  ngOnInit(): void {
    this.ref.nativeElement.style.color = 'red';
  }

}

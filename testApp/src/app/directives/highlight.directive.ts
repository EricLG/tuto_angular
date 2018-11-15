import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit  {

  @Input()
  light: string;

  baseColor: string;

  constructor(private element: ElementRef) {
    console.log(element);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.light);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.baseColor);
  }

  ngOnInit(): void {
    this.baseColor = this.element.nativeElement.style.backgroundColor;
  }

  private highlight(light: string) {
    this.element.nativeElement.style.backgroundColor = light;
  }
}

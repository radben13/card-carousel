
export type CardOptions = {
  fixedHeight?: boolean,
};

export class Card {
  constructor(private nativeElement: HTMLElement, private config: CardOptions) {

  }
  private _width: number;
  private _height: number;
  private _isVisible: boolean;

  get width(): number {
    return this._width;
  }
  set width(val: number) {
    this._width = val;
    this.updateWidth();
  }
  get height(): number {
    return this._height;
  }
  set height(val: number) {
    this._height = val;
    this.updateHeight();
  }
  get isVisible(): boolean {
    return this._isVisible;
  }
  set visible(val: boolean) {
    this._isVisible = val;
  }


  private updateWidth(): void {
    // TODO: Update Width of Card
  }
  private updateHeight(): void {
    if (!this.config.fixedHeight) { return; }
    // TODO: Update Height of Card
  }
}

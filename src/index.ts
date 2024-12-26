import { Notice, Plugin } from 'obsidian';

export default class Gallery extends Plugin {
  onload(): Promise<void> | void {
    this.addRibbonIcon('dice', 'Greet', () => new Notice('Hello World!'));
  }

  onunload(): void {}
}

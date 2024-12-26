import { Plugin } from 'obsidian';

export default class Gallery extends Plugin {
  onload(): Promise<void> | void {
    this.registerMarkdownCodeBlockProcessor('gallery', (source, el, ctx) => {
      const container = el.createDiv({
        attr: { display: 'block' },
      });
      const rows = source.split('\n').filter((row) => row.length > 0);

      for (let i = 0; i < rows.length; i++) {
        const imgPath = this.app.vault.adapter.getResourcePath(rows[i]);
        container.append(
          el.createEl('img', {
            attr: { src: imgPath, alt: rows[i] },
          })
        );
      }
    });
  }

  onunload(): void {}
}

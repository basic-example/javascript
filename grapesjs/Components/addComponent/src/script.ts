import grapesjs from 'grapesjs';
import './style.scss';

const editor = grapesjs.init({
  container: '#editor',
  storageManager: false,
});

document.getElementById('add_cmp_btn')?.addEventListener('click', () => {
  editor.Components.addComponent(
    {
      tagName: 'div',
      type: 'text', // defined component type ex) image
      removable: true,
      draggable: true,
      droppable: true,
      badgable: true,
      stylable: true,
      copyable: true,
      style: {
        color: 'green',
      },
      attributes: { abcd: '1234' },
      content: 'new component',
    },
    {}, // options
  );

  (<HTMLElement>document.getElementById('cmp_count')).innerHTML = String(
    (<any>editor.Components.getComponents()).length,
  );
});

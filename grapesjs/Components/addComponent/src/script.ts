import grapesjs from 'grapesjs';
import './style.scss';

const editor = grapesjs.init({
  container: '#editor',
  components: '<div class="custom">Hello world!</div>',
  style: '.custom {color: blue}',
});

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
    content: 'add new component',
  },
  {}, // options
);

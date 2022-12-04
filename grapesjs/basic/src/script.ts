import grapesjs from 'grapesjs';
import './style.scss';

grapesjs.init({
  container: '#editor',
  components: '<div class="custom">Hello world!</div>',
  style: '.custom {color: blue}',
});

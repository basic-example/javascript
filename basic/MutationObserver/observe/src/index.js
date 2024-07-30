
window.domObserver = async function (root, target, options) {
  let isDetected = false;
  const observer = new MutationObserver((record, observer) => {
    isDetected = true;
  });
  observer.observe(
    document.querySelector(root),
    options,
  );
  if (typeof target == 'function') {
    target = target();
  }
  document.querySelector(target).className = Math.random().toString(36).substring(2, 12);

  await new Promise((r) => setTimeout(r, 1000));

  return isDetected;
}

window.domObserver(
  '#main1',
  () => {
    const el = document.createElement('p');
    el.innerHTML = 'test1234';
    el.setAttribute('id', 'new1');
    document.querySelector('#main1').appendChild(el);
    return '#new1';
  },
  { subtree: true, attributes: ['class'] },
)

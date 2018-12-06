export default {
  bind(el, bindings, vnode) {
    console.log('Bind');
    // el.style.color = 'green';

    const fontModifier = bindings.modifiers['font'];
    if(fontModifier) {
      el.style.fontSize = '20px';
    }

    const delayModifier = bindings.modifiers['delay'];

    let delay = 0;
    if(delayModifier) {
      delay = 2000;
    }

    setTimeout(function () {
      const arg = bindings.arg;
      el.style[arg] = bindings.value;
    }, delay);

  },
  inserted(el, bindings, vnode) {
    console.log('Inserted');
  },
  update(el, bindings, vnode, oldVnode) {
    console.log(el, bindings, vnode, oldVnode);
    console.log('Update');
  },
  componentUpdated(el, bindings, vnode, oldVnode) {
    console.log('Component updated');
  },
  unbind() {
    console.log('Unbind');
  }
}
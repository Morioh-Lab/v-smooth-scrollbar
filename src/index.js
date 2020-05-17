

import Scrollbar from 'smooth-scrollbar';

var __install = function (Vue, options) {
    Vue.directive('scrollbar', {
        bind(el, binding, vnode) {
            if (!el.$scrollbar) {
                el.$scrollbar = Scrollbar.init(el, Object.assign({}, options, binding.value));
            }
        },
        unbind(el) {
            if (el.$scrollbar) {
                el.$scrollbar.destroy();
                delete el.$scrollbar;
            }
        }
    });
}


if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(__install);
}

Scrollbar.install = __install;

export default Scrollbar;

export { Scrollbar };
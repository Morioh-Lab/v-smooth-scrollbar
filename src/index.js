

import Scrollbar from 'smooth-scrollbar';

var __install = function (Vue, options) {
    Vue.directive('scrollbar', {
        bind(el, binding, vnode) {
            if (!el.$scrollbar) {

                el.$scrollbar = Scrollbar.init(el, Object.assign({}, options, binding.value));
                el.$scrollbar.addListener((status) => {                    

                    // if (vnode.componentInstance) {
                    //     vnode.componentInstance.$emit('scroll', { detail: status }); // use {detail:} to be uniform
                    // } else {
                    //     vnode.elm.dispatchEvent(new CustomEvent('scroll', { detail: status }));
                    // }

                    el.dispatchEvent(new CustomEvent('scroll', { detail: status }));

                });
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
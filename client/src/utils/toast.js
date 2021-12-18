const showToast = (type, message) => {
  UIkit.notification({
    message: `<div class="uk-alert-${type}" uk-alert>
      <a class="uk-alert-close" uk-close></a>
      <p>${message}</p>
    </div>`,
    pos: 'top-center',
  });
};

export default {
  primary: (msg) => showToast('primary', msg),
  success: (msg) => showToast('success', msg),
  warning: (msg) => showToast('warning', msg),
  danger: (msg) => showToast('danger', msg),
};

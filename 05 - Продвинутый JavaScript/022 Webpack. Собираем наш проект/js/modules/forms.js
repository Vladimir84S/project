function forms() {
  // Forms

  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: data,
    });

    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
          display: block;
          margin: 0 auto;
      `;
      // form.append(statusMessage);   по видео удалили
      form.insertAdjacentElement('afterend', statusMessage);

      // const request = new XMLHttpRequest(); по видео удалили
      // request.open('POST', 'server.php'); по видео удалили

      // request.setRequestHeader('Content-type', 'application/json'); по видео удалили
      const formData = new FormData(form);

      // const object = {}; по видео удалили
      // formData.forEach(function (value, key) { по видео удалили
      //   object[key] = value; по видео удалили
      // }); по видео удалили

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // const json = JSON.stringify(object); по видео удалили

      // request.send(json); по видео удалили
      // fetch("server.php", {  по видео удалили
      //   method: "POST",  по видео удалили
      //   headers: {  по видео удалили
      //     "Content-type": "application/json", по видео удалили
      //   },  по видео удалили
      //   body: JSON.stringify(object),  по видео удалили
      // })
      postData('http://localhost:3000/requests', json)
        // .then((data) => data.text()) по видео удалили
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });

      // request.addEventListener('load', () => { по видео удалили
      //   if (request.status === 200) {   по видео удалили
      //     console.log(request.response);  по видео удалили
      //     showThanksModal(message.success);  по видео удалили
      //     form.reset();  по видео удалили
      //     statusMessage.remove();   по видео удалили
      //   } else {   по видео удалили
      //     showThanksModal(message.failure); по видео удалили
      //   }  по видео удалили
      // });  по видео удалили
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
    <div class="modal__content">
    <div class="modal__close" data-close>×</div> 
    <div class="modal__title" >${message}</div> 
    </div> 
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }

  // fetch('http://localhost:3000/menu')  по видео удалили
  //   .then((data) => data.json()) по видео удалили
  //   .then((res) => console.log(res)); по видео удалили
}

module.exports = forms;

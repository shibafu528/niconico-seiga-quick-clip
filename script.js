window.addEventListener('DOMContentLoaded', function () {
  const elements = document.getElementById('clip_group_list').getElementsByTagName('li');
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].classList.contains('add_list')) {
      elements[i].addEventListener('click', function () {
        document.getElementsByClassName('add_clip_button')[0].click();
      });
    }
  }
});
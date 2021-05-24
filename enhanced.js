// Отправляем данные формы на JavaScript
if( window.FormData) {

	var appendComment = function (nameValue, commentValue) {
		var comment = document.createElement('li');
		var commentName = document.createElement('h4');
		var commentComment = document.createElement('p');
		var commentWrapper = document.querySelector('.comments');
		commentName.innerText = nameValue;
		commentComment.innerText = commentValue;
		nameValue ? comment.appendChild(commentName) : '';
		comment.appendChild(commentComment);
		commentWrapper.appendChild(comment);
	};

	form.addEventListener('submit', function (ev) {
		var formData = new FormData(form);
		commentValue = commentArea.value;
		nameValue = nameInput.value;

		var xhr = new XMLHttpRequest();
		// Сохраняем комментарий в базу
		xhr.open('POST', './save', true);
		xhr.onload = function () {
			appendComment(nameValue, commentValue);
		};
		xhr.send(formData);

		// Всегда вызывайте preventDefault в конце, см.: http://molily.de/javascript-failure/
		ev.preventDefault();
	});
}
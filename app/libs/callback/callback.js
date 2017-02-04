$(document).ready(function () {
    $('#callback_form').validate(
        {
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    digits: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'Это поле обязательно для заполнения'
                },
                email: {
                    required: 'Это поле обязательно для заполнения',
                    email: 'Некорректный E-mail адрес'
                },
                phone: {
                    required: 'Это поле обязательно для заполнения',
                    digits: 'Телефон должен состоять только из цифр'
                },
                message: {
                    required: 'Это поле обязательно для заполнения'
                }
            }
        }
    );
});
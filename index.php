<?php
    if (isset($_POST['email'])) {
        $name = $_POST['email'];

        if (mail('alinakulikova964@gmail.com',
            'Новое письмо',
            'Вы успешно зарегистрированы'."\n".
            'Вы ввели имя: '.$name
        )) {
            echo('Успешно отправлено')ж
        } else {
            echo('Ошибка')
        }
    }
?>
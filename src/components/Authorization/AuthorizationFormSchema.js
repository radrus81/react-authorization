import * as Yup from "yup";

const AuthorizationFormSchema = Yup.object().shape({
    login: Yup.string()
        //минимальная длина - 2 символа
        //.min(3, "Длина логина должна быть 3")
        //максимальная длина - 20 символов
        //.max(20, "Nice try, nobody has a first name that long")
        .required("Вы не ввели логин"),
    pass: Yup.string()
        .min(4, "Длина пароля должна быль 4 символов")
        .required("Вы не ввели пароль"),
});

export default AuthorizationFormSchema
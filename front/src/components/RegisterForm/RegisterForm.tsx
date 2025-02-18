export const RegisterForm = () => {
    return (
        <>
            <h3>Регистрация</h3>
            <form>
                <input type="text" placeholder="Введите имя" />
                <input type="email" placeholder="Введите email" />
                <input type="password" placeholder="Введите пароль" />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </>
    )
}
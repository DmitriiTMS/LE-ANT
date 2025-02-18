export const LoginForm = () => {
    return (
        <>
            <h3>Вход</h3>
            <form>
                <input type="email" placeholder="Введите email" />
                <input type="password" placeholder="Введите пароль" />
                <button type="submit">Войти</button>
            </form>
        </>
    )
}
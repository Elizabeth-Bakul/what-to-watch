/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import { FormEvent, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-action';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { authStatus } = useAppSelector((state) => state);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const submitLoginFormHandler = (evt: FormEvent) => {
    evt.preventDefault();
    if (emailInput.current !== null && passwordInput.current !== null) {
      dispatch(
        loginAction({
          email: emailInput.current.value,
          password: passwordInput.current.value,
        }),
      );
    }
  };
  if (authStatus === AuthorizationStatus.Authorized) {
    return <Navigate to="/" />;
  }
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={submitLoginFormHandler}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={emailInput}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                required
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordInput}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                required
                minLength={2}
                onChange={(evt) =>
                  addErrorMessage(
                    evt.target,
                    checkValidatePassword(evt.target.value),
                  )}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
function addErrorMessage(element: HTMLInputElement, message: string){
  if (message) {
    element.setCustomValidity(message);
    element.style.border = '3px solid red';
  } else {
    element.setCustomValidity('');
    element.style.border = '';
  }

  element.reportValidity();
}

function checkValidatePassword(value: string) {
  let errorMessage = '';
  if (!/(?=.*\d)(?=.*[a-z])/i.test(value)) {
    errorMessage = 'Пароль должен содержать цифры и буквы';
  }

  return errorMessage;
}


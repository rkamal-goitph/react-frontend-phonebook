import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        // name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    ).then(() => {
      navigate('/login');
      form.reset();
    });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      {/* <label className={css.label}>
        Username
        <input className={css.registerFormInput} type="text" name="name" />
      </label> */}
      <label className={css.label}>
        Email
        <input
          className={css.registerFormInput}
          type="email"
          name="email"
          autoComplete="email"
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.registerFormInput}
          type="password"
          name="password"
          autoComplete="new-password"
        />
      </label>
      <button className={css.registerFormBtn} type="submit">
        Register
      </button>
    </form>
  );
};

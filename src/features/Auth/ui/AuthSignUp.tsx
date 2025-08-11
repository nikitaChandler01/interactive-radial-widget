import { FormItem } from "@shared/ui/Form";
import { Title } from "@shared/ui/Typography/Title";
import { useForm } from "react-hook-form";
import "./AuthSignUp.scss";
import { useSignUp } from "../model";
import type { User } from "@shared/api/entities/user/user.types";
const AuthSignUp = () => {
  const { register: register_ } = useSignUp();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();
  const onSubmit = async (data) => {
    const response = await register_(data);
    //добавить иммитацию с access_token
    console.log(response);
  };
  return (
    <div className="auth-sign-up">
      <Title text="Регистрация" lvl={2} justify="center" />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
          <label htmlFor="email">Почта</label>
          <input
            placeholder="Email"
            id="email"
            {...register("email", {
              required: "Поле обязательно для заполнения",
            })}
          />
          {errors.email ? (
            <span className="error-text">{errors.email.message}</span>
          ) : undefined}
        </FormItem>
        <FormItem>
          <label htmlFor="password">Пароль</label>
          <input
            placeholder="Пароль"
            id="password"
            {...register("password", {
              required: "Поле обязательно для заполнения",
            })}
          />
          {errors.password ? (
            <span className="error-text">{errors.password.message}</span>
          ) : undefined}
        </FormItem>
        <input type="submit" value="Зарегистрироваться" />
      </form>
    </div>
  );
};

export default AuthSignUp;

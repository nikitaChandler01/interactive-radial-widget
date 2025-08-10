import { FormItem } from "@shared/ui/Form";
import { Title } from "@shared/ui/Typography/Title";
import { useForm } from "react-hook-form";
import "./AuthSignUp.scss";
const AuthSignUp = () => {
  const onSubmit = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="auth-sign-up">
      <Title text="Регистрация" lvl={2} justify="center" />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
          <label htmlFor="email">Почта</label>
          <input placeholder="Email" id="email" {...register("example")} />
        </FormItem>
        <FormItem>
          <label htmlFor="password">Пароль</label>
          <input
            placeholder="Пароль"
            id="password"
            {...register("exampleRequired", { required: true })}
          />
        </FormItem>
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" value="Зарегистрироваться" />
      </form>
    </div>
  );
};

export default AuthSignUp;

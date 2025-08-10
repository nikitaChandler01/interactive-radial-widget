import "./Title.scss";

interface ITitle {
  text: string;
  lvl?: 1 | 2 | 3 | 4 | 5;
  justify?: "left" | "right" | "center";
  align?: "top" | "middle" | "bottom";
}

const Title = ({ text, lvl = 1, justify = "left", align = "top" }: ITitle) => {
  return (
    <div
      className={`title title--lvl-${lvl} justify-${justify} align-${align}`}
    >
      {text}
    </div>
  );
};

export default Title;

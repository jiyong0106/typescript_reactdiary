import React from "react";

interface MyButtonProps {
  onClick:() => void; 
  text: string;
  type?: "positive" | "negative" | "default";
}

export const MyButton= ({ onClick, text, type }:MyButtonProps) => {
  
  const styleBtn = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${styleBtn}`].join(" ")}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

//const styleBtn = () =>["positive", "negative"].includes(type) ? type : "default";
// type이 positive나 negative면 type을 반환하고 아니면 default를 반환한다.
//button 은 onclick과 type을 받아서 버튼을 만들어준다.text는 버튼에 들어갈 텍스트이다.
// react 에서는 children이라는 prop의 타입은 대부분 ReactNode이다. 
//children이 없는 경우도 설정하고 싶으면 ?를 붙여서 optional로 설정
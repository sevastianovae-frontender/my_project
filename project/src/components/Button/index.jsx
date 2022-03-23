import React from "react";
import { Button } from 'antd';

const handleClick=()=>{
  alert('Есть контакт')
}
const _Button = () => {
  return (
    <Button style={{borderColor: 'CornflowerBlue'}} onClick={handleClick} >
      Создать пост
    </Button>
  );
};

export default _Button;

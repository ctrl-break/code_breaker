export const randomCode = () => {
  const result = [];
  while(result.length < 4){
      let randomnumber = Math.floor(Math.random()*10);
      if(result.indexOf(randomnumber) > -1) continue;
      result.push(randomnumber);
  }
  return result.join('');
}

export const isValidCode = (code) => {
  const num = Number(code);
  if (code.length !== 4 || !num) return false;

  return true;
}

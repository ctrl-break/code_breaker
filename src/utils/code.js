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

export const formatResult = (result, code) => {
    return `[ ◉ ${result.onRightPlace} | ◌ ${result.guessed}  ] ${code}`
}

export const compareCodes = (playersCode, code) => {
  let guessed = 0;
  let onRightPlace = 0;
  const playersCodeArray = playersCode.split('', 4);
  const codeArray = code.split('', 4);

  for (let i=0; i<4; i++){
    if (playersCodeArray[i] === codeArray[i]) {
      onRightPlace++;
    } else if (codeArray.indexOf(playersCodeArray[i]) > -1) {
      guessed++;
    }
  }

  console.log('---', playersCodeArray, codeArray);

  return formatResult({ guessed, onRightPlace }, playersCode);
}

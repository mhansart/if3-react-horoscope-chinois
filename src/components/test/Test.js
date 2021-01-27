import { useState } from 'react';

function Test() {
  const padding = '15px';

  const [faceHappy, setFaceHappy] = useState(true);
  const changeSmiley = () => {
    setFaceHappy(!faceHappy);
  };

  const animals = ['🐒', '🦊', '🦁', '😸', '🐺', '🐲', '🐨', '🐗', '🏔', '🐼', '🔮', '🦔', '🤖'];
  const [animal, setAnimal] = useState(animals[0]);

  const changeAnimals = () => {
    const idx = Math.floor((Math.random() * animals.length));
    setAnimal(animals[idx]);
  };
  return (
    <div>
      <button onClick={changeSmiley} style={{ padding }}>
        {faceHappy ? '😀' : '😟'}
      </button>
      <button onClick={changeAnimals} style={{ padding }}>
        {animal}
      </button>
    </div>
  );
}

export default Test;

import { useRef, useState } from 'react';
import signes from '../signes';
import element from '../element';
import './FormControl.scss';

const FormControl = ({ setColor }) => {
  const ipt = useRef();
  const [text, setText] = useState('');
  const submitYear = (e) => {
    e.preventDefault();
    let reponse = '';
    const idx = ((parseInt(ipt.current.value, 10) - 1900) % 12);
    if (ipt.value !== '') {
      reponse = 'Votre signe est ';
      reponse += signes[idx].nom;
    }
    const idxEl = ((parseInt(ipt.current.value, 10) - 1900) % 10) % 2 === 0 ? ((parseInt(ipt.current.value, 10) - 1900) % 10) / 2 : (((parseInt(ipt.current.value, 10) - 1900) % 10) - 1) / 2;
    reponse += idxEl === 1 ? " d'" : ' de ';
    reponse += `${element[idxEl]}`;
    setText(reponse);
    setColor(idx);
  };

  return (
    <form className="w-full form-group" onSubmit={submitYear}>
      <label htmlFor="annee">Votre année de naissance :</label>
      <input id="annee" type="number" min="1900" ref={ipt} className="form-control bg-gray-200 rounded focus:outline-none py-1 px-2" />
      <button onClick={submitYear} className="bg-red-300 hover:bg-red-400 px-4 py-2 rounded focus:outline-none" type="submit">Valider</button>
      <p>{text}</p>
    </form>
  );
};

export default FormControl;

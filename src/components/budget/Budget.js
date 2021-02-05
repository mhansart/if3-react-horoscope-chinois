import { useEffect, useRef, useState } from 'react';
import './budget.scss';

function Budget({
  depense1, depense2, depense3, depense4,
}) {
  const [inputs, setInputs] = useState({
    depense1: 0,
    depense2: 0,
    depense3: 0,
    depense4: 0,
  });
  const salaire = useRef();
  const [montant, setMontant] = useState(0);
  const btn = useRef();
  const [face, setFace] = useState('😐');
  const text = Number(montant) - (Number(inputs.depense1) + Number(inputs.depense2) + Number(inputs.depense3) + Number(inputs.depense4));
  useEffect(() => {
    if (text > 0) {
      setFace('😀');
    } else if (text === 0) {
      setFace('😐');
    } else if (text < 0) {
      setFace('😭');
    }
  });
  const [isDisabled, setIsDisabled] = useState('');
  const [inputDisabled, setInputDisabled] = useState('disabled');
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled('disabled');
    setInputDisabled('');
    setMontant(salaire.current.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Mon budget</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="salaire">Votre salaire</label>
        <input
          type="number"
          name="salaire"
          ref={salaire}
          disabled={isDisabled}
        />
        <button ref={btn} disabled={isDisabled}>Valider</button>
      </form>
      <form>

        <label htmlFor={depense1}>{depense1}</label>
        <input
          type="number"
          name="depense1"
          onChange={handleChange}
          disabled={inputDisabled}
        />
        <label htmlFor={depense2}>{depense2}</label>
        <input
          type="number"
          name="depense2"
          onChange={handleChange}
          disabled={inputDisabled}
        />
        <label htmlFor={depense3}>{depense3}</label>
        <input
          type="number"
          name="depense3"
          onChange={handleChange}
          disabled={inputDisabled}
        />
        <label htmlFor={depense4}>{depense4}</label>
        <input
          type="number"
          name="depense4"
          onChange={handleChange}
          disabled={inputDisabled}
        />
        <p>Il vous reste: {text}€ {face}</p>
      </form>
    </div>
  );
}

export default Budget;

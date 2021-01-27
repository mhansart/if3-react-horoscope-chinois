import { useState } from 'react';
import Button from '../button/Button';
import './Drapeaux.scss';

function Drapeaux() {
  const [medalsBe, setMedalsBe] = useState(0);
  const [medalsFr, setMedalsFr] = useState(0);
  const [medalsCo, setMedalsCo] = useState(0);
  const [medalsUs, setMedalsUs] = useState(0);
  const [medalsLa, setMedalsLa] = useState(0);
  const countries = [
    {
      country: 'Belgique', flag: '🇧🇪', id: 0, medals: medalsBe,
    },
    {
      country: 'France', flag: '🇫🇷', id: 1, medals: medalsFr,
    },
    {
      country: 'Corée', flag: '🇰🇵', id: 2, medals: medalsCo,
    },
    {
      country: 'USA', flag: '🇺🇸', id: 3, medals: medalsUs,
    },
    {
      country: 'Laos', flag: '🇱🇦', id: 4, medals: medalsLa,
    },
  ];
  const winners = [...countries];
  winners.sort((a, b) => a.medals - b.medals);
  winners.reverse();
  let textOr;
  let textArgent;
  let textBronze;

  //   fonction pour trouver les gagnants
  const findWinner = () => {
    //   trouver tout ceux qui ont le mêmes nombre de médailles
    const newOr = winners.filter((x) => x.medals === winners[0].medals);
    textOr = (newOr.map((x) => x.country)).join(', ');
    const arrArgent = winners.filter((x) => x.medals !== winners[0].medals);
    if (arrArgent.length !== 0) {
      const newArgent = winners.filter((x) => x.medals === arrArgent[0].medals);
      textArgent = newArgent.length !== 0 ? (newArgent.map((x) => x.country)).join(', ') : '';
      const arrBronze = winners.filter((x) => x.medals !== winners[0].medals && x.medals !== arrArgent[0].medals);
      if (arrBronze.length !== 0) {
        const newBronze = winners.filter((x) => x.medals === arrBronze[0].medals);
        textBronze = newBronze.length !== 0 ? (newBronze.map((x) => x.country)).join(', ') : '';
      } else {
        textBronze = '';
      }
    } else {
      textBronze = '';
      textArgent = '';
    }
    return [textOr, textArgent, textBronze];
  };
  const winnersCountry = findWinner();

  const moreMedals = (e) => {
    if (e.target.innerHTML === '🇧🇪') {
      setMedalsBe(medalsBe + 1);
    }
    if (e.target.innerHTML === '🇫🇷') {
      setMedalsFr(medalsFr + 1);
    }
    if (e.target.innerHTML === '🇰🇵') {
      setMedalsCo(medalsCo + 1);
    }
    if (e.target.innerHTML === '🇺🇸') {
      setMedalsUs(medalsUs + 1);
    }
    if (e.target.innerHTML === '🇱🇦') {
      setMedalsLa(medalsLa + 1);
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            {countries.map(({ country }) => <th>{country}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {countries.map(({ medals }) => <td>{medals}</td>)}
          </tr>
          <tr>
            {countries.map(({ flag, id }) => <td><Button key={id} content={flag} handler={moreMedals} /></td>)}
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <td>🥇</td><td>🥈</td><td>🥉</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{winnersCountry[0]}</td><td>{winnersCountry[1]}</td><td>{winnersCountry[2]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Drapeaux;

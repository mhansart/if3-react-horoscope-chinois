import './Animals.scss';
import truncature from '../../functions/string';

function Animals({
  desc, no, image, handler, color,
}) {
  const html = truncature(desc, 150);
  const more = desc.length > 150;
  return (
    <div className={`border animal ${color}`}>
      <img src={`img/${image}`} className="w-full" alt={no} />
      <div className="p-4">
        <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
          {no}
        </h5>
        <p>{html}{more ? <button onClick={handler}>[Voir plus]</button> : null}</p>
      </div>
    </div>
  );
}

export default Animals;

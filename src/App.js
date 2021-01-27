import { useState } from 'react';
import Animals from './components/animals/Animals';
import FormControl from './components/formControl/FormControl';
import './App.scss';
import signes from './components/signes';
import Modal from './components/modal/Modal';
import Drapeaux from './components/drapeaux/Drapeaux';
// import Test from './components/test/Test';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });
  const [colorId, setColorId] = useState(null);

  const toggleModal = (e) => {
    e.preventDefault();
    const container = e.target.closest('.animal');
    if (container) {
      const idx = signes.findIndex((x) => x.nom === container.querySelector('h5').innerHTML);
      setModalContent({ title: signes[idx].nom, description: signes[idx].description });
    } else {
      setModalContent({ title: '', description: '' });
    }
    setOpenModal(!openModal);
  };
  return (
    <div>
      <Drapeaux />
      {/* <Test /> */}
      {/* <Modal content={modalContent} visible={openModal} handler={toggleModal} />
      <FormControl setColor={setColorId} />
      <div className="px-5 App grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
        {signes.map(({
          nom, description, img, id,
        }) => {
          const color = Number(id) === colorId ? 'bg-red-300' : 'bg-white';
          return <Animals desc={description} color={color} no={nom} image={img} key={id} handler={toggleModal} />;
        })}
      </div> */}
    </div>
  );
}

export default App;

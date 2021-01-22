import './Modal.scss';

const Modal = ({
  handler, content, visible,
}) => {
  const { title, description } = content;
  const visibility = visible ? 'visible' : 'hidden';
  return (
    <div style={{ visibility }} className=" one-modal min-h-screen w-full fixed md:flex md:items-center md:justify-center">
      <div className="bg-black opacity-50 w-full h-full absolute z-10 inset-0" />
      <div className="content bg-white px-10 py-5 rounded-lg md:max-w-md md:mx-auto inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
        <button className="close" onClick={handler}>X</button>
        <div className="md:flex items-center">
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h3 className="text-lg">{title}</h3>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

function Button({ content, handler }) {
  return (
    <button onClick={handler}>
      {content}
    </button>
  );
}

export default Button;

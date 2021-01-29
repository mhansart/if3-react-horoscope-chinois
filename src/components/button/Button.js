function Button({
  content, handler, name, value,
}) {
  return (
    <button name={name} value={value} onClick={handler}>
      {content}
    </button>
  );
}

export default Button;

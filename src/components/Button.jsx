function Button(props) {
  return (
    <button className={`bg-blue-400  text-white p-2 rounded-md`} {...props}>
      {props.children}
    </button>
  );
}
export default Button;

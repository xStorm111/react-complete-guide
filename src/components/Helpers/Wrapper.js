// "empty" component to workaround JSX limitation of having only 1 root component to the DOM
const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;

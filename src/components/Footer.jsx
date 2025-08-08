const Footer = (props) => {
  const total = props.course.parts.reduce((total, curr) => {
    return total + curr.exercises;
  }, 0);
  return <strong>total of {total} exercises</strong>;
};

export default Footer;

import Part from './Part';

const Content = (props) => {
  const allParts = props.course.parts.map((part) => (
    <Part key={part.id} part={part.name} exercises={part.exercises} />
  ));

  return <>{allParts}</>;
};

export default Content;

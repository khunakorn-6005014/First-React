import "../../styles.css";

interface CourseComponentProps {
  title: string
}
const CourseComponent = (props: CourseComponentProps) => {
  function findCourseCode(title: string): number {
    const random = Math.random() * 10 * title.length
    return parseInt(`${random}`);
  }
  const courseTitle = `${props.title} (${findCourseCode(props.title)})`;

  return <div className="course">{courseTitle}</div>;
};

export default CourseComponent;

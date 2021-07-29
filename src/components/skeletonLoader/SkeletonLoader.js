import PropTypes from "prop-types";
import "./SkeletonLoader.css";

const SkeletonLoader = ({ computedClass }) => (
  <span className={`skeleton ${computedClass}`} />
);

SkeletonLoader.defaultProps = {
  computedClass: "w-32 h-32",
};

SkeletonLoader.propTypes = {
  computedClass: PropTypes.string,
//   children: PropTypes.object,
};

export default SkeletonLoader;

import PropTypes from "prop-types";
function UserProfile({ name, age }) {
  return (
    <div>
      <h2>user profile</h2>
      <p>Name : {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};
export default UserProfile;

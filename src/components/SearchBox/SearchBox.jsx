import css from "./SearchBox.module.css";
import PropTypes from "prop-types";

const SearchBox = ({ value, onChange }) => (
  <div className={css.wrapper}>
    <label className={css.label} htmlFor="filter">
      Find contacts by name:
    </label>
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;

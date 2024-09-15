import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import PropTypes from "prop-types";

const Contact = ({ name, number, id, onDelete }) => (
  <div className={css.contact}>
    <div className={css.contactText}>
      <span>
        <FaUser className={css.contactIcon} />
        {name}
      </span>
      <span>
        <FaPhoneAlt className={css.contactIcon} />
        {number}
      </span>
    </div>
    <button onClick={() => onDelete(id)} className={css.btn}>
      Delete
    </button>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;

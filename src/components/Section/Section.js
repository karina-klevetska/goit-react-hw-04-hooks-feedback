import PropTypes from 'prop-types'
import './Section.css';

const Section = ({ title, children }) => {
    return (
        <section className="section">
            <h1>
                {title}
            </h1>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array
}

export default Section;
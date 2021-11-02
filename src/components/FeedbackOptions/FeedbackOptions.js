import PropTypes from 'prop-types'
import './FeedbackOptions.css'

const FeedbackOptions = ({
    clickGoodFeedback,
    clickNeutralFeedback,
    clickBadFeedback
}) => {
    return (
        <div className="feedback-options">
            <button type="button" className="button button__good" onClick={clickGoodFeedback}>Good:</button>
            <button type="button" className="button button__neutral" onClick={clickNeutralFeedback}>Neutral</button>
            <button type="button" className="button button__bad" onClick={clickBadFeedback}>Bad</button>
        </div>
    )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    clickGoodFeedback: PropTypes.func.isRequired,
    clickNeutralFeedback: PropTypes.func.isRequired,
    clickBadFeedback: PropTypes.func.isRequired
}
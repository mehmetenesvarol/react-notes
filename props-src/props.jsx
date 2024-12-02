import PropTypes from 'prop-types'

function Props(props) {
    return (
        <>
            <h3>Name : {props.name}</h3>
            <h3>Surname : {props.surName}</h3>
            <h3>Age : {props.age}</h3>
            <h3>Is Student ? : {props.isStudent ? "Yes" : "No"}</h3>
        </>
    );
}

Props.propTypes = {
    name: PropTypes.string,
    surName: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Props.defaultProps = {
    name: "Guest",
    surName: "Guest",
    age: 0,
    isStudent: "false",
}

export default Props;
import PropTypes from "prop-types";


export const OneOfSample = (props) => {
    const {color} = props;
   return (
   <div style={{ backgroundColor: color, padding: "20px", color: "white",}}> 
   <p> this component has a bg colour of {color}</p>
   </div>
   );
};

OneOfSample.PropTypes = {
    color: PropTypes.oneOf(["red", "green", "blue"]).isRequired,
};
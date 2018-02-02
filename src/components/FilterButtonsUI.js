import React from 'react';
import Button from 'material-ui/Button';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 275,
        marginLeft: '2rem',
        marginRight: '2rem',
    }
}

function FilterButtonsUI(props) {
    return (
        <div style={styles.root}>
            <Button onClick={props.filterUI}>All</Button>
            <Button onClick={props.css}>Css</Button>
            <Button onClick={props.fonts}>Fonts</Button>
            <Button onClick={props.react}>React</Button>
            <Button onClick={props.back}>Back</Button>
        </div>
    );
}

//   FlatButtons.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default FilterButtonsUI;
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

function FilterButtonsUX(props) {
    return (
        <div style={styles.root}>
            <Button onClick={props.filterUX}>All</Button>
            <Button onClick={props.medium}>Medium</Button>
            <Button onClick={props.pub}>Publications</Button>
            <Button onClick={props.back}>Back</Button>
        </div>
    );
}

//   FlatButtons.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default FilterButtonsUX;
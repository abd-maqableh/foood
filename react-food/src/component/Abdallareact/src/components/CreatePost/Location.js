import React from 'react';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';


export default function ButtonSizes() {

    return (
        <div>

            <div>
                <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"

                >
                    <NavigationIcon />
                    Location
        </Fab>
            </div>
        </div>
    );
}

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import React from 'react';

function ChooseGender({ checkMale, funcG, checkFemale, checkOther }) {
    return (
        <div className="checkbox-section">
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkMale}
                            onChange={(e) => funcG(e)}
                            name="checkMale"
                            color="primary"
                            icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />}
                        />
                    }
                    label="Ч"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkFemale}
                            onChange={(event) => funcG(event)}
                            name="checkFemale"
                            icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />}
                        />
                    }
                    label="Ж"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkOther}
                            onChange={(event) => funcG(event)}
                            name="checkOther"
                            color = "default"
                            icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />}
                        />
                    }
                    label="Не визначено"
                />
            </FormGroup>
        </div>
    )
}

export default ChooseGender;
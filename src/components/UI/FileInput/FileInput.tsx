import React, {useRef} from 'react';
import {Button, Grid, TextField} from "@mui/material";

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    name: string;
    label: string;
    fileName?: string;
}

const FileInput: React.FC<Props> = ({onChange, onClear, name, label, fileName}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const activateInput = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }

    return (
        <>
            <input
                style={{display: 'none'}}
                type="file"
                name={name}
                onChange={onChange}
                ref={inputRef}
            />
            <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item xs>
                    <TextField
                        disabled
                        label={label}
                        value={fileName || ''}
                        onClick={activateInput}
                    />
                </Grid>
                {onClear && (
                    <Grid item>
                        <Button
                            variant="contained"
                            onClick={onClear}
                        >Clear</Button>
                    </Grid>
                )}
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={activateInput}
                    >Browse</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default FileInput;
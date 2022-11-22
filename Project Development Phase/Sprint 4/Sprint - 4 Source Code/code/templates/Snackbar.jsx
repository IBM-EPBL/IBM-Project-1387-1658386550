import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const CustomizedSnackbar = ({ title, open, setOpen }) => {


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        
        setOpen(false);
    }

    return (
        <div>
            {title === 'list' &&
                <div className='root'>
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                    >
                        <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled" >
                            Category successfully Removed
                        </MuiAlert>
                    </Snackbar>
                </div>
            }
            {title === 'form' &&
                <div className='root'>
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                    >
                        <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled" >
                            Category successfully Added
                        </MuiAlert>
                    </Snackbar>
                </div>
            }
            {title === 'unfilled' &&
                <div className='root'>
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                    >
                        <MuiAlert onClose={handleClose} severity="warning" elevation={6} variant="filled" >
                            Unfulfilled fields..!!
                        </MuiAlert>
                    </Snackbar>
                </div>
            }
            
        </div>
        
    );
};

export default CustomizedSnackbar;



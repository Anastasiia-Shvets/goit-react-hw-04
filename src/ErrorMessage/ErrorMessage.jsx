import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const ErrorMessage = ({ error }) => {
    toast.error("This didn't work.");
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        
    )
    
};

export default ErrorMessage;
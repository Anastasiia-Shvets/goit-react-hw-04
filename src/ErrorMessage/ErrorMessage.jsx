import { Toaster, toast } from 'react-hot-toast';

const ErrorMessage = () => {
    const notify = () => toast.error("This didn't work.")
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
        
        );
};

export default ErrorMessage;

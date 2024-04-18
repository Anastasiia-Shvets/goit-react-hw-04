import { toast } from 'react-hot-toast';

const ErrorMessage = ({ error }) => {
    return (
        <>
        {error && toast.error('This is an error!')}
        </>
        
        );
};

export default ErrorMessage;

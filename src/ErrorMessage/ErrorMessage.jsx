import { toast } from 'react-hot-toast';

const ErrorMessage = ({ error }) => {
    const notify = () => toast('This is an error!')
    return (
        <>
            {error && toast.error(notify)}
        </>
        
        );
};

export default ErrorMessage;

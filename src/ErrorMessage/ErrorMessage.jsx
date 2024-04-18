import { toast } from 'react-hot-toast';

const ErrorMessage = ({ error }) => {
    toast.error('This is an error!');
    return null;
};

export default ErrorMessage;

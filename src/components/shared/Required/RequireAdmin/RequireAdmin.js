import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../../firebase.init';

const RequireAdmin = () => {
    const [user, loading] = useAuthState(auth);
    
    return (
        <div>
            
        </div>
    );
};

export default RequireAdmin;
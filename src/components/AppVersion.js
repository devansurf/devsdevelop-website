import React, {useEffect, useState } from 'react';

const AppVersion  = () => {
    const [version, setVersion] = useState('');

    useEffect(() => {
        fetch('/.netlify/functions/appVersion')
        .then((response) => response.json())
        .then((data) => setVersion(data.version))
        .catch((error) => console.error('Error fetching the app version', error));
    }, []);

    return (
        <div>
            <h2>App Version: 2.1.0 {version}</h2>
        </div>
    );
};

export default AppVersion;
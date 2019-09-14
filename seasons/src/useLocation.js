import {useState, useEffect} from 'react';

const useLocation = () => {
    const [lat, setLat] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
            },
            (error) => {
                setError(error.message)
            }
        );
    }, []
    );

    return [lat, error];
}

export default useLocation;
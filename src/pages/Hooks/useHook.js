import React, { useState, useEffect } from 'react';
import { userInfo } from 'os';

function useHook() {
    const [useInfo, setUserInfo] = useState({});

    useEffect(() => {
        //fetch
        setUserInfo();
    }, {});
    return userInfo;
}

export default useHook;

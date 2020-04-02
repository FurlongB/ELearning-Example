import React from 'react';

const secContext = React.createContext({status:{section: "1", page: "1"}, setSect: (stat) => {}});

export default secContext;
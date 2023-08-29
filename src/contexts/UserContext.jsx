import React, { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => {},
});

import { createContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

const authInfo = { name: "nodi sagor" };

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

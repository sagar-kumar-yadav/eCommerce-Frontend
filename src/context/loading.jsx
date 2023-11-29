import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  const setLoadingState = (status) => {
    setLoading(status);
  };
  return(
    <LoadingContext.Provider value={{ isLoading, setLoadingState }}>
      {children}
    </LoadingContext.Provider>
  )
};

// custom hook

const useLoading = () => useContext(LoadingContext);
export { useLoading, LoadingProvider };
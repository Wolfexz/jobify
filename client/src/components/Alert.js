import { useAppContext } from "../context/appContext";

export const Alert = () => {

  const {alertType, alertText} = useAppContext();

  return <div className={`alert alert-${alertType} animate__animated animate__fadeIn`}>
      {alertText}
  </div>;
};

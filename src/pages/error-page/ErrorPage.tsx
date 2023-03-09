import type { ReactElement } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = (): ReactElement => {
  const error = useRouteError(); 
	
	const renderError = (): any => {
		isRouteErrorResponse(error) &&
			<i>{error.statusText || error.status}</i>
		
	}

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {renderError()}
      </p>
    </div>
  );
}

export default ErrorPage;
import { AxiosError } from "axios";
import {
    BadRequestErrorComponent,
    ForbiddenErrorComponent,
    InternalServerErrorComponent,
    NotFoundErrorComponent,
} from "./components";
import React from "react";

interface ErrorComponentProps {
    error: AxiosError | any;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => {
    let currentErrorCode = Number(error?.response?.status);
    currentErrorCode = isNaN(currentErrorCode) ? 500 : currentErrorCode;

    switch (error.response.status) {
        case 400:
            return <BadRequestErrorComponent error={error} />;
        case 404:
            return <NotFoundErrorComponent error={error} />;
        case 403:
            return <ForbiddenErrorComponent error={error} />;
        case 500:
        default:
            return <InternalServerErrorComponent error={error} />;
    }
};

export default ErrorComponent;

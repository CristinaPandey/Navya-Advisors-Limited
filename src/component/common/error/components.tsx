import { Button, Card, Result } from "antd";
import { AxiosError } from "axios";
import React from "react";
import { Link } from "react-router-dom";

interface ErrorComponentProps {
    error: AxiosError | any;
}

const NotFoundErrorComponent: React.FC<ErrorComponentProps> = () => {
    return (
        <Card className="mt-8 w-full">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the data for this page/element you requested is missing."
                extra={
                    <Link to="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </Card>
    );
};

const ForbiddenErrorComponent: React.FC<ErrorComponentProps> = () => {
    return (
        <Card className="mt-8 w-full">
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={
                    <Link to="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </Card>
    );
};

const BadRequestErrorComponent: React.FC<ErrorComponentProps> = () => {
    return (
        <Card className="mt-8 w-full">
            <Result
                status="404"
                title="400"
                subTitle="Sorry, the data for this page/element you requested is missing/invalid."
                extra={
                    <Link to="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </Card>
    );
};

const InternalServerErrorComponent: React.FC<ErrorComponentProps> = () => {
    return (
        <Card className="mt-8 w-full">
            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong on our end."
                extra={
                    <Link to="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </Card>
    );
};

export {
    NotFoundErrorComponent,
    ForbiddenErrorComponent,
    InternalServerErrorComponent,
    BadRequestErrorComponent,
};

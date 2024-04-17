import { Button, Layout, Result, Flex } from "antd";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

export function GlobalErrorBoundary() {
    const error = useRouteError();

    return (
        <Layout className="w-full h-screen grid place-content-center">
            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
                extra={
                    <Flex gap="middle" className="w-full" justify="center">
                        <Link to="/" reloadDocument>
                            <Button type="primary">Reload Application</Button>
                        </Link>
                        {Boolean(error) && (
                            <Button
                                type="dashed"
                                onClick={() => {
                                    console.error(error);
                                }}
                            >
                                Click to log error
                            </Button>
                        )}
                    </Flex>
                }
            />
        </Layout>
    );
}

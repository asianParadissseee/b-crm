import React, {ErrorInfo, ReactNode, Suspense} from 'react';
import {Button, Result} from "antd";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(_error: Error) {
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <Result
                        className="mt-20"
                        status="warning"
                        title="Произошла ошибка, зайдите позже."
                        extra={
                        <Button type="primary" className="bg-blue-900">
                            Обновить
                        </Button>
                        }
                    />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;

import React, { useEffect, Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const ScrollToTop: React.FC<RouteComponentProps> = ({ history, children }: any) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, [history]);

    return <Fragment>{children}</Fragment>;
};

export default withRouter(ScrollToTop);

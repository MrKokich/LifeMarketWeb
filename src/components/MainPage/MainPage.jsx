import React from 'react';
import { Button } from 'antd';
import { DatePicker } from 'antd';

const MainPage = React.createClass({



    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dahed</Button>
                <Button type="danger">Danger</Button>
                <DatePicker/>
            </div>
        );
    },
});

export default MainPage;
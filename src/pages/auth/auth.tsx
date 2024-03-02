import {Button, Form, Input, Typography} from "antd";

type FieldType = {
    username: string;
    password: string;
};

const Auth = () => {
    const onFinish = (values: FieldType) => {
        console.log("Success:", values);
    };

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            className="m-auto my-16 max-w-xl border p-10 rounded-2xl"
            onFinish={onFinish}
            autoComplete="off"
        >
            <Typography.Title type={"secondary"} className="text-center">
                Авторизация
            </Typography.Title>
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{required: true, message: "Please input your username!"}]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 20 }}
            >
                <Input/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{required: true, message: "Please input your password!"}]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 20 }}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item wrapperCol={{span: 20}}>
                <Button className="bg-blue-900 w-full mt-10" type="primary" htmlType="submit" size={"large"}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Auth;

import React, {ReactNode, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    BellOutlined,
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import {MenuProps, Modal} from "antd";
import {Breadcrumb, Layout as AntdLayout, Menu, theme} from "antd";

type MenuItem = Required<MenuProps>["items"][number];

interface LayoutProps {
    children?: ReactNode;
}

const {Header, Content, Sider} = AntdLayout;

const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem => {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
};

const Layout = ({children}: LayoutProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false)
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const navigate = useNavigate();
    const showModal = () => {
        setIsOpenModal(true);
    };

    const handleOk = () => {
        setIsOpenModal(false);
    };

    const handleCancel = () => {
        setIsOpenModal(false);
    };

    const getHome = () => navigate("/");

    const items: MenuItem[] = [
        getItem("Option 1", "1", <PieChartOutlined/>),
        getItem("Option 2", "2", <DesktopOutlined/>),
        getItem("User", "sub1", <UserOutlined/>, [
            getItem("Tom", "3"),
            getItem("Bill", "4"),
            getItem("Alex", "5"),
        ]),
        getItem("Team", "sub2", <TeamOutlined/>, [
            getItem("Team 1", "6"),
            getItem("Team 2", "8"),
        ]),
        getItem("Files", "9", <FileOutlined/>),
    ];

    return (
        <AntdLayout style={{minHeight: "100vh"}}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <AntdLayout>
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <div className="mx-5 cursor-pointer w-fit flex justify-between items-center">
                        <h1 onClick={getHome}>U-BUSINESS</h1>
                        <div onClick={showModal} className="absolute right-16">
                            <BellOutlined/>
                        </div>
                    </div>
                </Header>
                <Content style={{margin: "0 16px"}}>
                    <Breadcrumb style={{margin: "16px 0"}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                        <Modal title="Уведомления" open={isOpenModal} onOk={handleOk} onCancel={handleCancel}>
                            <p> Напоминаем что до подачи налоговой декларации для вашего предприятия осталась 2 дня</p>
                        </Modal>
                    {children}
                </Content>
            </AntdLayout>
        </AntdLayout>
    );
};

export default Layout;

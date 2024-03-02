import {Button,  Table, Tag} from "antd";
import {Key} from "react";

const {Column} = Table;

const AccountingReport = () => {

    enum Currency {
        DOLLAR = "доллар",
        SOM = "сом",
        TENGE = "тенге",
    }

    interface DataType {
        key: Key;
        firstName: string;
        lastName: string;
        sum: number;
        currency: string;
        appointment: string[]; // назначение
        provider: string; //поставщик
    }

    const data: DataType[] = [
        {
            key: '1',
            firstName: 'Akbar',
            lastName: 'Maloer',
            sum: 32000,
            currency: Currency.SOM,
            appointment: ["Назначено по приказу директора"],
            provider: "Айыл банк",
        },
        {
            key: '2',
            firstName: 'Alisher',
            lastName: 'Jumanov',
            sum: 900,
            currency: Currency.DOLLAR,
            appointment: ["Назначено от отдела по продажам"],
            provider: "Бакай банк",
        },
        {
            key: '3',
            firstName: 'Asema',
            lastName: 'Designer',
            sum: 200000,
            currency: Currency.TENGE,
            appointment: ["Назначено от клиентов"],
            provider: "Банк Азии"
        },
    ];

    return (
        <Table dataSource={data}>
            <Column title="ФИО пользователя" dataIndex="firstName" key="firstName"/>
            <Column title="Сумма" dataIndex="sum" key="sum"/>
            <Column title="Валюта" dataIndex="currency" key="currency"/>
            <Column
                title="Назначение"
                dataIndex="appointment"
                key="appointment"
                render={(appointments: string[]) => (
                    <>
                        {appointments?.map((appointment) => (
                            <Tag color="blue" key={appointment}>
                                {appointment}
                            </Tag>
                        ))}
                    </>
                )}
            />
            <Column title="Поставщик" dataIndex="provider" key="provider"/>

            <Column
                title={() => (
                    <Button type="primary" className="bg-blue-900" size="large">
                        Выгрузить в excel
                    </Button>
                )}
            />
        </Table>
    );
};

export default AccountingReport;
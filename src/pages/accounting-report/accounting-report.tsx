import {Button, Flex, Table, Tag, Typography} from "antd";
import {Key} from "react";

const {Column} = Table;

const AccountingReport = () => {

    enum Currency {
        DOLLAR = "Доллар",
        SOM = "Сом",
        TENGE = "Тенге",
    }

    interface IBanks {
        name: string,
        sum: number
    }

    const banks: IBanks[] = [
        {
            name: "Бакай банк",
            sum: 20000
        },
        {
            name: "Оптима банк",
            sum: 132432213
        },
        {
            name: "Айыл банк",
            sum: 3432432423432
        },
    ]

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
            firstName: 'Асылбек',
            lastName: 'Равшанов',
            sum: 32000,
            currency: Currency.SOM,
            appointment: ["Назначено по приказу директора"],
            provider: "Айыл банк",
        },
        {
            key: '2',
            firstName: 'Айдин',
            lastName: 'Джуманов',
            sum: 900,
            currency: Currency.DOLLAR,
            appointment: ["Назначено от отдела по продажам"],
            provider: "Бакай банк",
        },
        {
            key: '3',
            firstName: 'Раджан',
            lastName: 'Ахматуллоев',
            sum: 200000,
            currency: Currency.TENGE,
            appointment: ["Назначено от клиентов"],
            provider: "Банк Азии"
        },
    ];

    return (
        <>
            <Flex gap={"middle"} className="bg-white">
                {
                    banks.map((bank) => (
                        <>
                            <Typography.Paragraph className="p-3" key={bank.name}>
                                <b>Банк</b>: {bank.name} <br/>
                                <b>Сумма</b>: {bank.sum} Cом
                            </Typography.Paragraph>
                        </>
                    ))
                }
            </Flex>
            <hr/>
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
        </>
    );
};

export default AccountingReport;
import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "828ed52f",
            amount: 200,
            status: "pending",
            email: "a@example.com",
        },
        {
            id: "928ed52f",
            amount: 500,
            status: "failed",
            email: "b@example.com",
        },
        {
            id: "1028ed52f",
            amount: 350,
            status: "paid",
            email: "c@example.com",
        },
    ]
}

export default async function Payments() {
    const data = await getData();
    return (
        <div className="container py-10 mx-auto">
            <DataTable columns={columns} data={data} />
            <br />
            <DataTable columns={columns} data={[]} />
        </div>
    );
}
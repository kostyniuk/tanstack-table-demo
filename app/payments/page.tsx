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
        // ...
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
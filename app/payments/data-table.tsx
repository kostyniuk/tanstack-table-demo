"use client"

import {
    ColumnDef,
    // flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    console.log(table.getRowModel().rows) // array of rows
    console.log(table.getRowModel().flatRows) // array of rows, but all sub-rows are flattened into the top level
    console.log(table.getRowModel().rowsById['0']) // get rows by id
    console.log(table);

    return null;
}
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  TableSortLabel,
  Pagination,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useFilters, usePagination, useSortBy, useTable } from "react-table";

export default function DataTable({ data, columns }) {
  const [filterInput, setFilterInput] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const tableInstance = useTable(
    { columns, data },
    useFilters,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    page, // Instead of rows, use page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("name", value);
    setFilterInput(value);
  };

  const handleSortRequest = (columnId) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
    // You can also add logic here to sort your data
  };

  const isEmpty = rows.length === 0;

  return (
    <div>
      <TextField
        value={filterInput}
        onChange={(e) => handleFilterChange(e)}
        // ... other props
      />
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <TableCell
                    key={column.id}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <TableSortLabel
                      active={column.isSorted && orderBy === column.id}
                      direction={orderBy === column.id ? order : "asc"}
                      onClick={() => handleSortRequest(column.id)}
                    >
                      {column.render("Header")}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {isEmpty ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  <Typography variant="subtitle1" color="textSecondary">
                    No data available
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              page.map((row, index) => {
                prepareRow(row);
                return (
                  <TableRow
                    key={row.id}
                    {...row.getRowProps()}
                    sx={{
                      backgroundColor:
                        index % 2 === 0 ? "rgba(0, 0, 0, 0.04)" : "white",
                    }}
                  >
                    {row.cells.map((cell, index) => (
                      <TableCell key={index} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={pageCount}
        page={pageIndex + 1}
        onChange={(event, page) => gotoPage(page - 1)}
        color="primary"
      />
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Chip,
} from "@nextui-org/react";

interface Project {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  status: string;
}

interface ProjectTableProps {
  projects: Project[];
  onSelectionChange: (keys: Set<string>) => void;
}

export default function ProjectTable({
  projects,
  onSelectionChange,
}: ProjectTableProps) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    setLoading(false); // Assume projects are passed in directly, so loading is false
  }, [projects]);

  const pages = Math.ceil(projects.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return projects.slice(start, end);
  }, [page, projects]);

  const handleSelectionChange = (keys: Set<string>) => {
    setSelectedKeys(keys);
    onSelectionChange(keys);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <Table
        aria-label="Example table with client side pagination"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn key="title">TITLE</TableColumn>
          <TableColumn key="type">TYPE</TableColumn>
          <TableColumn key="status">STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>
                {item.status === "planned" || item.status === "done" ? (
                  <Chip
                    className="capitalize"
                    color={item.status === "done" ? "success" : "warning"}
                  >
                    {item.status}
                  </Chip>
                ) : (
                  item.status
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

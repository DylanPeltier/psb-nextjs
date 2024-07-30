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
  onSelectionChange: (key: string | null) => void;
  selectedKey: string | null;
}

export default function ProjectTable({
  projects,
  onSelectionChange,
  selectedKey,
}: ProjectTableProps) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  useEffect(() => {
    setLoading(false);
  }, [projects]);

  const pages = Math.ceil(projects.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return projects.slice(start, end);
  }, [page, projects]);

  const handleSelectionChange = (keys: Set<string>) => {
    const selectedKey = keys.size > 0 ? Array.from(keys)[0] : null;
    onSelectionChange(selectedKey);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <Table
        aria-label="Example table with client side pagination"
        selectionMode="single"
        selectedKeys={selectedKey ? new Set([selectedKey]) : new Set()}
        onSelectionChange={handleSelectionChange}
        color="primary"
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
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell className="capitalize">{item.title}</TableCell>
              <TableCell className="capitalize">{item.type}</TableCell>
              <TableCell>
                {item.status === "planned" || item.status === "done" ? (
                  <Chip
                    className="uppercase"
                    color={item.status === "done" ? "success" : "warning"}
                    size="sm"
                  >
                    {item.status}
                  </Chip>
                ) : (
                  item.status
                )}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

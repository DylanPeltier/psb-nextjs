import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip } from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { columns } from "./data"; // Adjust the path if needed
import { fetchProjects, deleteProject } from "../../backend/lib/api/projects"; // Adjust the path if needed

const statusColorMap = {
  done: "success",
  planned: "warning",
};

export default function ProjectTable() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        console.log(data); // Log the data to check its structure
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      setProjects((prevProjects) => prevProjects.filter((project) => project.project_id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const renderCell = (project, columnKey) => {
    const cellValue = project[columnKey];
    console.log(columnKey, cellValue); // Log columnKey and cellValue for debugging

    switch (columnKey) {
      case "name":
        return <p>{project.projectName || "N/A"}</p>; // Adjusted to use cellValue
      case "type":
        return <p className="capitalize">{cellValue || "N/A"}</p>;
      case "status":
        return (
          <Chip radius="sm" className="capitalize" color={statusColorMap[cellValue]} size="sm" variant="flat">
            <p className="font-semibold uppercase">{cellValue}</p>
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit project">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete project">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => handleDelete(project.project_id)}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Table aria-label="Projects table">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={projects}>
        {(item) => (
          <TableRow key={item.project_id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

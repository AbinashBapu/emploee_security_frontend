"use client";
import { useState, useEffect } from "react";

const EmployeeTable = () => {
  const [loading, setLoading] = useState(true);

  const employees = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      emailAddress: "john.doe@example.com",
      authProvider: "Google",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      emailAddress: "jane.smith@example.com",
      authProvider: "Facebook",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      emailAddress: "alice.johnson@example.com",
      authProvider: "GitHub",
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      emailAddress: "bob.brown@example.com",
      authProvider: "Google",
    },
  ];

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const authtoken = localStorage.getItem("authToken") || "";
        const response = await fetch(`api/employee`, {
          method: "GET",
          headers: {
            Authorization: authtoken,
          },
        });

        const data = await response.json();
        // setEmployees(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employees:", error);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Employee Details</h2>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Auth Provider</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailAddress}</td>
              <td>{employee.authProvider}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

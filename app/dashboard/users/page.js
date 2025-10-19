"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../api/users";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
export default function UsersPage() {
  const dispatch = useDispatch();
  const { users, status, currentPage, usersPerPage } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers({ pageNumber: currentPage, limit: usersPerPage }));
  }, [dispatch, currentPage, usersPerPage]);

  if (status === "loading") {
    return <p className="text-center mt-10">Loading users...</p>;
  }

  if (!users || users.length === 0) {
    return <p className="text-center mt-10">No users found.</p>;
  }

  const exportPdf = (users) => {
    const doc = new jsPDF("l", "pt", "a3");
    doc.setFontSize(16);
    doc.text("Eyego Users", doc.internal.pageSize.getWidth() / 2, 30, {
      align: "center",
    });

    doc.setFontSize(12);

    users.forEach(function (user, i) {
      const y = 60 + i * 60;

      const date = new Date(user.created_at.replace(" ", "T"));
      const formattedDate = date.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      doc.text(`Name: ${user.name || ""}`, 50, y);
      doc.text(`Signed in at: ${formattedDate}`, 50, y + 15);
      doc.text(`Age: ${user.age || ""}`, 50, y + 30);
      doc.text(`Gender: ${user.gender || ""}`, 50, y + 45);
      doc.text(`Money: ${user.money || ""}`, 250, y);
      doc.text(`Orders: ${user.orders || ""}`, 250, y + 15);
      doc.text(`Pending Issues: ${user.pending_Issues || ""}`, 250, y + 45);
    });

    doc.save(`Eyego_users.pdf`);
  };

  const exportExcel = (users) => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(users);
    XLSX.utils.book_append_sheet(wb, ws, "Eyego Users");
    XLSX.writeFile(wb, "Eyego_users.xlsx");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-8">Eyego Users Table</h2>
      <div className="flex gap-4">
        <button
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer"
          onClick={() => exportPdf(users)}
        >
          Export Pdf
        </button>
        <button
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer"
          onClick={() => exportExcel(users)}
        >
          Export Excel
        </button>
      </div>

      {/* ✅ Table */}
      <div className="overflow-auto shadow-xl rounded-2xl hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Signed in at
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Age
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Gender
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Money
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Orders
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Pending Issues
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const date = new Date(user.created_at.replace(" ", "T"));
              return (
                <tr key={user.id}>
                  <td className="p-3 text-sm text-gray-700">{user.name}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {date.toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="p-3 text-sm text-gray-700">{user.age}</td>
                  <td className="p-3 text-sm text-gray-700">{user.gender}</td>
                  <td className="p-3 text-sm text-gray-700">{user.money}</td>
                  <td className="p-3 text-sm text-gray-700">{user.orders}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {user.pending_Issues}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {" "}
        {users.map((user) => {
          const date = new Date(user.created_at.replace(" ", "T"));
          return (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow">
              {" "}
              <div className="text-sm text-gray-700">
                {" "}
                <strong>Name:</strong> {user.name}{" "}
              </div>{" "}
              <div className="text-sm text-gray-700">
                {" "}
                <strong>Signed in:</strong>{" "}
                {date.toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
              </div>{" "}
              <div className="text-sm text-gray-700">
                {" "}
                <strong>Age:</strong> {user.age}{" "}
              </div>{" "}
              <div className="text-sm text-gray-700">
                {" "}
                <strong>Gender:</strong> {user.gender}{" "}
              </div>{" "}
              <div className="text-sm text-gray-700">
                {" "}
                <strong>Money:</strong> {user.money}{" "}
              </div>{" "}
              <div className="text-sm text-gray-700">
                {" "}
                <strong>Orders:</strong> {user.orders}{" "}
              </div>{" "}
              <div className="text-sm text-gray-700">
                {" "}
                <strong>Pending Issues:</strong> {user.pending_Issues}{" "}
              </div>{" "}
            </div>
          );
        })}{" "}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => dispatch({ type: "users/onNavigatePrev" })}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => dispatch({ type: "users/onNavigateNext" })}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

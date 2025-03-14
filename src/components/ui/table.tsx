import React from "react";
import { CashAwardsData, ContestSection } from "./contest-data-restructured";

interface TableProps {
    data: any;
    type: "categories" | "mainAwards" | "age5AndUnderAwards";
    sectionName?: string;
    className?: string;
    headerBgColor?: string;
}

const Table: React.FC<TableProps> = ({
    data,
    type,
    sectionName,
    className = "",
    headerBgColor = "bg-gray-100"
}) => {
    // Function to determine columns and rows based on type
    const getTableData = () => {
        if (type === "categories" && sectionName) {
            // Get categories for a specific section
            const section = data.contestSections.find(
                (s: ContestSection) => s.name === sectionName
            );

            if (!section) return { columns: [], rows: [] };

            return {
                columns: ["Category", "Description"],
                rows: section.categories.map((cat) => [cat.code, cat.description])
            };
        }
        else if (type === "mainAwards") {
            // Structure with award names as rows and age groups as columns
            return {
                columns: ["Award", "Ages 6-10 Individual", "Ages 11-17 Individual", "Group"],
                rows: Object.entries(data.mainAwards).map(([award, values]) => [
                    award,
                    values["Ages 6-10 Individual"],
                    values["Ages 11-17 Individual"],
                    values["Group"]
                ])
            };
        }
        else if (type === "age5AndUnderAwards") {
            // Structure for 5 and under awards
            return {
                columns: ["Award", "Individual", "Group"],
                rows: Object.entries(data.age5AndUnderAwards).map(([award, values]) => [
                    award,
                    values["Individual"],
                    values["Group"]
                ])
            };
        }

        return { columns: [], rows: [] };
    };

    const { columns, rows } = getTableData();

    if (columns.length === 0 || rows.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div className="overflow-x-auto rounded-t-xl mb-6 ">
            <table className={`min-w-full ${className}`}>
                {/* Table Header */}
                <thead>
                    <tr className={headerBgColor}>
                        {columns.map((col, index) => (
                            <th key={index} className=" p-2 text-left">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-transparent"}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className={` p-2 ${typeof cell === 'number' ? "text-center" : "font-medium"}`}>
                                    {typeof cell === 'number' ? `$${cell}` : cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default Table;

"use client";
import React, { useState, useEffect } from "react";
import { FilterOperator } from "primereact/api";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "../../../public/assets/theme.css";
//core
import "primereact/resources/primereact.min.css";

export default function Tender() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tabledata, settabledata] = useState<any>(null);
  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });

  const fetchTender = async () => {
    const res = await fetch(`api/tender`);
    try {
      const data = await res.json();
      const newdataarray = await data.map((tenderdata: any, index: any) => {
        return { index: index, id: tenderdata._id, title: tenderdata.title };
      });

      settabledata(newdataarray);
      console.log(newdataarray);
    } catch (err) {
      console.log("some erro occur");
    }
  };
  useEffect(() => {
    fetchTender();
    setLoading(false);
    initFilters();
  }, []);

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    (_filters as any)["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      tite: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
    });
    setGlobalFilterValue("");
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="p-12">
      <div className="card">
        <DataTable
          filters={filters}
          value={tabledata}
          paginator
          showGridlines
          rows={6}
          loading={loading}
          dataKey="id"
          header={header}
          emptyMessage="No Tender found."
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} to {last}"
        >
          <Column field="title" header="Title" style={{ minWidth: "16rem" }} />
          <Column
            header="Description"
            field="description"
            style={{ minWidth: "20rem" }}
          />
          <Column
            header="Start Date"
            field="startDate"
            style={{ minWidth: "7rem" }}
          />

          <Column
            header="End Date"
            field="EndDate"
            style={{ minWidth: "7rem" }}
          />
          <Column
            header="Attchment"
            field="attachment"
            style={{ minWidth: "5rem" }}
          />
        </DataTable>
      </div>
    </div>
  );
}

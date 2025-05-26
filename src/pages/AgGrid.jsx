// AgGrid.jsx
import { onMount, onCleanup } from "solid-js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Grid } from "ag-grid-community";
import { Box, Heading, Center } from "@hope-ui/solid";

export default function AgGrid() {
  let gridDiv;

  onMount(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const gridOptions = {
      columnDefs: [
        { headerName: "Nama", field: "name", sortable: true, filter: true },
        { headerName: "Email", field: "email", sortable: true, filter: true },
        {
          headerName: "Kota",
          field: "address.city",
          valueGetter: (params) => params.data.address.city,
          sortable: true,
          filter: true,
        },
      ],
      rowData: data,
      defaultColDef: {
        flex: 1,
        resizable: true,
        minWidth: 100,
      },
    };

    const grid = new Grid(gridDiv, gridOptions);

    onCleanup(() => {
      grid.destroy();
    });
  });

  return (
    <Box p="$6">
      <Heading mb="$4" color="$primary9">👥 User List (AG Grid)</Heading>
      <Center>
        <Box
          class="ag-theme-alpine"
          ref={(el) => (gridDiv = el)}
          style={{ height: "500px", width: "100%" }}
        />
      </Center>
    </Box>
  );
}
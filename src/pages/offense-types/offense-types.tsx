import React from "react";

import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Pager,
  Lookup,
  Form,
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";
import { Item } from "devextreme-react/form";
import { employees, states } from "./data.js";

const notesEditorOptions = { height: 100 };

export default function OffenseTypes() {
  return (
    <React.Fragment>
      <h2 className={"content-block"}>Виды нарушений</h2>

      {/* <DataGrid
          className={'dx-card wide-card'}
          dataSource={dataSource as any}
          showBorders={false}
          focusedRowEnabled={true}
          defaultFocusedRowIndex={0}
          columnAutoWidth={true}
          columnHidingEnabled={true}
        >
          <Paging defaultPageSize={10} />
          <Pager showPageSizeSelector={true} showInfo={true} />
          <FilterRow visible={true} />
  
          <Column dataField={'Task_ID'} width={90} hidingPriority={2} />
          <Column
            dataField={'Task_Subject'}
            width={190}
            caption={'Subject'}
            hidingPriority={8}
          />
          <Column
            dataField={'Task_Status'}
            caption={'Status'}
            hidingPriority={6}
          />
          <Column
            dataField={'Task_Priority'}
            caption={'Priority'}
            hidingPriority={5}
          >
            <Lookup
              dataSource={priorities}
              valueExpr={'value'}
              displayExpr={'name'}
            />
          </Column>
          <Column
            dataField={'ResponsibleEmployee.Employee_Full_Name'}
            caption={'Assigned To'}
            allowSorting={false}
            hidingPriority={7}
          />
          <Column
            dataField={'Task_Start_Date'}
            caption={'Start Date'}
            dataType={'date'}
            hidingPriority={3}
          />
          <Column
            dataField={'Task_Due_Date'}
            caption={'Due Date'}
            dataType={'date'}
            hidingPriority={4}
          />
          <Column
            dataField={'Task_Priority'}
            caption={'Priority'}
            name={'Priority'}
            hidingPriority={1}
          />
          <Column
            dataField={'Task_Completion'}
            caption={'Completion'}
            hidingPriority={0}
          />
        </DataGrid> */}

      <DataGrid dataSource={employees} keyExpr="ID" showBorders={true}>
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <Editing
          mode="popup"
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
        >
          <Popup
            title="Employee Info"
            showTitle={true}
            width={700}
            height={525}
          />
          <Form>
            <Item itemType="group" colCount={2} colSpan={2}>
              <Item dataField="FirstName" />
              <Item dataField="LastName" />
              <Item dataField="Prefix" />
              <Item dataField="BirthDate" />
              <Item dataField="Position" />
              <Item dataField="HireDate" />
              <Item
                dataField="Notes"
                editorType="dxTextArea"
                colSpan={2}
                editorOptions={notesEditorOptions}
              />
            </Item>

            <Item
              itemType="group"
              caption="Home Address"
              colCount={2}
              colSpan={2}
            >
              <Item dataField="StateID" />
              <Item dataField="Address" />
            </Item>
          </Form>
        </Editing>
        <Column dataField="Prefix" caption="Title" width={70} />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="BirthDate" dataType="date" />
        <Column dataField="Position" width={170} />
        <Column dataField="HireDate" dataType="date" />
        <Column dataField="StateID" caption="State" width={125}>
          <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
        </Column>
        <Column dataField="Address" visible={false} />
        <Column dataField="Notes" visible={false} />
      </DataGrid>
    </React.Fragment>
  );
}

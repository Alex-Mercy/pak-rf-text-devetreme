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
import { offenseTypes, offenseCategories } from "./mock.js";

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

      {/* <Item itemType="group" colCount={2} colSpan={2}>
              <Item dataField="Категория" />
              <Item dataField="Название" />
              <Item dataField="Скрыто" />
              <Item dataField="Скрыто на карте" />
              <Item dataField="Сценарий фиксации" />
              <Item dataField="Категория из Траффика" />
              <Item dataField="Запрещающий комментарий" />
              <Item dataField="Продолжительность видео" />
              <Item dataField="Комментарий перед фиксацией" />
              <Item dataField="Мета данные" />
              <Item dataField="Запрет фиксировать в произвольном месте" />
              <Item dataField="Цвет" />
              <Item dataField="Вес" /> */}

      <DataGrid dataSource={offenseTypes} keyExpr="id" showBorders={true}>
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <Editing
          mode="popup"
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
        >
          <Popup
            title="Редактирование"
            showTitle={true}
            width={1000}
            height={800}
          />
          <Form>
            {/* <Item itemType="group" colCount={2} colSpan={2}>
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
            </Item> */}
            {/* <Item itemType="group" colCount={2} colSpan={2}> */}
            <Item dataField="categoryId" />
            <Item dataField="name" />
            <Item dataField="hidden" />
            <Item dataField="hidden_on_map" />
            <Item dataField="scenario" />
            <Item dataField="traffic_category" />
            <Item
              dataField="forbirding_comment"
              editorType="dxTextArea"
              colSpan={2}
            />
            <Item
              dataField="message_before_start"
              editorType="dxTextArea"
              colSpan={2}
            />
            <Item dataField="meta" editorType="dxTextArea" colSpan={2} />
            <Item dataField="video_max_time" />

            <Item dataField="deny_outside_zone" />
            <Item dataField="color" />
            <Item dataField="weight" />
          </Form>
        </Editing>
        {/* <Column dataField="Prefix" caption="Title" width={70} />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="BirthDate" dataType="date" />
        <Column dataField="Position" width={170} />
        <Column dataField="HireDate" dataType="date" />
        <Column dataField="StateID" caption="State" width={125}>
          <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
        </Column>
        <Column dataField="Address" visible={false} />
        <Column dataField="Notes" visible={false} /> */}
        <Column dataField="categoryId" caption="Категория">
          <Lookup
            dataSource={offenseCategories}
            valueExpr="id"
            displayExpr="name"
          />
        </Column>
        <Column dataField="name" caption="Название" width={570} />
        <Column
          dataField="hidden"
          caption="Скрыто"
          dataType="boolean"
          width={70}
        />
        <Column
          dataField="hidden_on_map"
          caption="Скрыто на карте"
          dataType="boolean"
          width={150}
        />
        <Column
          dataField="scenario"
          caption="Сценарий фиксации"
          visible={false}
        />
        <Column dataField="traffic_category" caption="Категория из Траффика" />
        <Column
          dataField="forbirding_comment"
          visible={false}
          caption="Запрещающий комментарий"
        />
        <Column
          dataField="video_max_time"
          visible={false}
          caption="Продолжительность видео"
        />
        <Column
          dataField="message_before_start"
          visible={false}
          caption="Комментарий перед фиксацией"
        />
        <Column dataField="meta" visible={false} caption="Мета данные" />
        <Column
          dataField="deny_outside_zone"
          caption="Запрет фиксировать в произвольном месте"
          visible={false}
        />
        <Column dataField="color" visible={false} caption="Цвет" />
        <Column dataField="weight" visible={false} caption="Вес" />
      </DataGrid>
    </React.Fragment>
  );
}

import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private gridApi;
  private gridColumnApi;
  private rowSelection = 'multiple';
  stat: boolean;
  columnDefs = [
    {
      headerName: 'Select All',
      field: 'selectAll',
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true
      // minWidth: 10,
      // maxWidth: 150
    },
    {
    headerName: 'Status',
    field: 'status',
    width: 300,
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
      values: [
        'New',
        'Open',
        'Closed'

      ]
    }
 },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'},
    {headerName : 'Comment' ,
     field : 'comment',
     editable: true,
     /*cellEditor : 'agLargeTextCellEditor',
     cellEditorParams : {
       rows : 3,
       columns : 10
    }*/
    cellEditor : 'agTextCellEditor'
  }
];
rowData = [
    {  model: 'Celica', price: 35000 },
    { model: 'Mondeo', price: 32000 },
    {  model: 'Boxter', price: 72000 }
];
/*onSelectionChanged(){
    const selectedRows = this.gridApi.getSelectedRows();
    selectedRows.forEach(function(selectedRow, index) {
      if (selectedRow.status === 'New') {
         this.stat = true;
      } else {
         this.stat = false;
      }
    });
    return this.stat;
}*/

onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
}

}

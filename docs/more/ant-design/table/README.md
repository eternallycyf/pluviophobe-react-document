# Table 

## 1. Table
```js
<Table
# Style configuration
  bordered={true}
  size={'default'|'middle'|'small'}
// fixed Does not affect responsive layout
  tableLayout={'auto'|'fixed'}
/* 
  Zebra Stripes
  .light {background-color: #ffffff; }
  .dark {background-color: #fbfbfb;}
*/
  rowClassName={(record,index)=>index%2===0?'light':'dark'}
// Do not display header
  showHeader={boolean}
  title={(currentPageData)=>'title'}
  footer={(currentPageData)=>'title'}
/*  colSpan:merge cell  index={0}:Specify the number of
 <Table.Summary fixed>
         <Table.Summary.Row>
            <Table.Summary.Cell colSpan={2} index={0}>
               Summary
            </Table.Summary.Cell>
         </Table.Summary.Row>
 </Table.Summary>
*/
  summary={(currentPageData)=>ReactNode}
  
# Basic configuration
  dataSource={dataSource}
  columns={columns}
  loading
  // Paging component, false is not display
  pagination:{{  
    total,
    current,
    pageSize,
    pageSizeOptions:[10, 20, 50, 100]
    showTotal: (total) => `共 ${total} 条数据`,
    onChange=((currentPage)=>fetch)
  }}
  onChange={(pagination,filters,sorter,extra)}
  
# Possible configurations
// If the datasource does not have a key specified, the rowkey will be added automatically
  rowKey={record => record.uid}
// Default copywriting settings
  locale={}
// Disable sorting and return to the default state
  sortDirections=['ascend', 'descend', 'ascend']
// For editable menus
  components={{
    body:{ cell:ReactNode,row:ReactNode }        
  }}
/* Accordion effect expansion redundant information
   expandedRowRender Control display content
   rowExpandable Control expansion
*/
  expandable={{
    expandedRowRender:(record)=> ReactNode,
    rowExpandable:(record)=> record.name !== 'xxx'
  }}
// Trigger events for each row, such as click, hover, and a row
  onRow={record => {
    return {
      onClick: event => {}, 
      onDoubleClick: event => {},
      onContextMenu: event => {},
      onMouseEnter: event => {}, 
      onMouseLeave: event => {},
    };
  }}
// Click the header row
  onHeaderRow={(columns, index) => {
    return {
      onClick: (e) => {}, 
    };
  }}
/* Open the function       item on the left of the table row
   type                    One more radio or multiple selection box on the left
   selections              Enable the user-defined function of selecting all and inverting selection
   fixed:true              Is it fixed
   columnWidth             Width of each item
   hideSelectAll           Hide select all menu
   defaultSelectedRowKeys  Default selection
   getCheckboxProps        Default props for each item
   renderCell              Custom rendering function box
   selectedRowKeys         Manually control the selected item with onchange
   onChange                Changed callback 
*/
  rowSelection={{
    type: 'radio'| 'checkbox' ,
    selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {key:'',text:"",onSelect:(changeRowKeys)=>xxx}
    ]
    fixed: true,
    columnWidth:string | number,
    hideSelectAll:true,
    defaultSelectedRowKeys: string[] | number[],
    getCheckboxProps:(record)=>{
       disabled: record.name === 'Disabled User',
       name: record.name,
    }
    renderCell:(checked,record,index,originNode),
    selectedRowKeys:[],
    onChange:(selectedRowKeys,selectedRows)=>{
      setData(selectedRowKeys)
    },
  }}
# scroll
/* Fixed cell
   Horizontal matching required    columns fixed: 'left|right',
   Vertical to fit                 columns width:100 to Specify width
*/
  scroll={{ x: 1800，y:240 }}
/>
```

## 2. columns
```js
const columns = [
  {
# Style configuration
    align:'left center right',
// The left part of this line will be fixed, and each passing through needs to be added
    fixed:'left'|'right'|true,
    width:100,
    className:"",
// Cell merge
    colSpan:number,
// Whether it can be edited and reconstructed with the tower component
    editable: true,
    ellipsis: boolean | {showTitle:false}
# Basic configuration
    title:"",
    dataIndex:"",
    key:"",
/* Zebra Stripes
  let rowColorOdd = { style: { backgroundColor: '#fff' } }
  let rowColorEven = { style: { backgroundColor: 'red' } }
*/
    onCell: (record, rowIndex) 
       => rowIndex % 2 === 0 ? rowColorOdd : rowColorEven
    render:(text,record,index)=>{
      return {
        children: ReactNode,
        props:{
          colSpan:3
        }
      }
    },

      
# filter
// Custom delete menu
    filters:[
      {text:"",value:"",children:[{...}]}
    ]
/* Controlled mode updates controlled data in onchange callback function of table
   The value is a filtered array of values (filters.value)
*/
    filteredValue: string[],
// The filter rule value is filters.value
    onFilter:(value,record)=>{record.name.includes(value)}

    defaultFilteredValue: string[]
// Filter menu mode
    filterMode: 'tree' | 'menu',
    filterSearch: true
    filterIcon:(filtered)=> <Icon />
// Whether the filter consolidation of multiple columns takes effect only affects this column
    filterMultiple: true
      
/* Custom filter menu
({setSelectedKeys, selectedKeys, confirm, clearFilters})=>{}
*/
    filterDropdown:()=>ReactNode
// Custom filter menu display and hide
    filterDropdownVisible={boolean}
// Callback when custom filter menu is closed and displayed
    onFilterDropdownVisibleChange=(visible)=>{}
// Filter by field coloring
    filtered={true}

   
# sort
   defaultSortOrder: 'descend' | 'ascend',
// Turn on sorting mode descending ascending
   sortDirections:['descend','ascend'],
// Controlled mode updates controlled data in onchange callback function of table
   sortOrder: boolean | 'descend' | 'ascend',
/* Sorting rules
   compare: Sorting rules
   multiple: Who has the highest priority in multi column sorting? Which column rule has priority
   sorter: {
      compare: (a, b) =>a.key - b.key,
      multiple: 1,
    },
*/
   sorter:(a, b) => a.key - b.key
  }
# Header grouping
  children:[
    ...
  ]
]
```
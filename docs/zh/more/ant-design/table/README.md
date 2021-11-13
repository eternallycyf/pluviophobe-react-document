# Table 表格

## 1. Table
```js
<Table
# 样式配置
  bordered={true}
  size={'default'|'middle'|'small'}
// fixed 不会影响响应式布局
  tableLayout={'auto'|'fixed'}
/* 
  斑马条纹
  .light {background-color: #ffffff; }
  .dark {background-color: #fbfbfb;}
*/
  rowClassName={(record,index)=>index%2===0?'light':'dark'}
// 不显示表头
  showHeader={boolean}
  title={(当页数据)=>'title'}
  footer={(当页数据)=>'title'}
/*  colSpan 合并单元格  index={0} 指定是第几个
 <Table.Summary fixed>
         <Table.Summary.Row>
            <Table.Summary.Cell colSpan={2} index={0}>
               Summary
            </Table.Summary.Cell>
         </Table.Summary.Row>
 </Table.Summary>
*/
  summary={(当页数据)=>ReactNode}
  
# 基本配置
  dataSource={dataSource}
  columns={columns}
  loading
  // 分页组件, false 不显示
  pagination:{{  
    total,
    current,
    pageSize,
    pageSizeOptions:[10, 20, 50, 100]
    showTotal: (total) => `共 ${total} 条数据`,
    onChange=((currentPage)=>fetch)
  }}
  onChange={(pagination,filters,sorter,extra)}
  
# 可能会用到的配置
// 如果dataSource没有key 指定了rowKey 就会自动加
  rowKey={record => record.uid}
// 默认文案设置
  locale={}
// 禁用排序恢复到默认状态 
  sortDirections=['ascend', 'descend', 'ascend']
// 用于可编辑菜单
  components={{
    body:{ cell:ReactNode,row:ReactNode }        
  }}
/* 手风琴效果 展开多余信息
   expandedRowRender 控制显示内容
   rowExpandable 控制展开项
*/
  expandable={{
    expandedRowRender:(record)=> ReactNode,
    rowExpandable:(record)=> record.name !== 'xxx'
  }}
// 每一行的触发事件 例如 click,hover 某一行
  onRow={record => {
    return {
      onClick: event => {}, 
      onDoubleClick: event => {},
      onContextMenu: event => {},
      onMouseEnter: event => {}, 
      onMouseLeave: event => {},
    };
  }}
// 点击表头行
  onHeaderRow={(columns, index) => {
    return {
      onClick: (e) => {}, 
    };
  }}
/* 开启表格行左边功能项
   type             左边多一个单选或者多选框
   selections       开启 全选 反选 清空 自定义功能
   fixed:true       是否固定
   columnWidth      每一项的宽度
   hideSelectAll    隐藏全选菜单
   defaultSelectedRowKeys 默认选中项
   getCheckboxProps 每一项的默认Props
   renderCell       自定义渲染功能框
   selectedRowKeys  手动控制选中项 配合onChange
   onChange         发生改变的回调
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
/* 固定单元格
   横向需配合 columns 的 fixed: 'left|right',
   垂直需配合 columns 的 width:100 指定宽度
*/
  scroll={{ x: 1800，y:240 }}
/>
```

## 2. columns
```js
const columns = [
  {
# 样式配置
    align:'left center right',
// 这行左边的部分都会固定 经过的每个都需要加
    fixed:'left'|'right'|true,
    width:100,
    className:"",
// 单元格合并
    colSpan:number,
// 是否可编辑 配合 tabel component重构
    editable: true,
    ellipsis: boolean | {showTitle:false}
# 基本配置
    title:"",
    dataIndex:"",
    key:"",
/* 斑马条纹
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
// 自定义删选菜单
    filters:[
      {text:"",value:"",children:[{...}]}
    ]
/* 受控模式 在table 的onChange回调函数 更新受控数据
   值为已筛选的 value 数组 (filters.value)
*/
    filteredValue: string[],
// 筛选规则 value是filters.value
    onFilter:(value,record)=>{record.name.includes(value)}

    defaultFilteredValue: string[]
// 筛选菜单模式 
    filterMode: 'tree' | 'menu',
    filterSearch: true
    filterIcon:(filtered)=> <Icon />
// 多个列的筛选 合并生效 是否只影响本列
    filterMultiple: true
      
/* 自定义筛选菜单
({setSelectedKeys, selectedKeys, confirm, clearFilters})=>{}
*/
    filterDropdown:()=>ReactNode
// 自定义筛选菜单 显示与隐藏
    filterDropdownVisible={boolean}
// 自定义筛选菜单 关闭和显示时候的回调
    onFilterDropdownVisibleChange=(visible)=>{}
// 筛选通过字段着色
    filtered={true}

   
# sort
   defaultSortOrder: 'descend' | 'ascend',
// 开启排序方式 降序 升序
   sortDirections:['descend','ascend'],
// 受控模式 在table 的onChange回调函数 更新受控数据  
   sortOrder: boolean | 'descend' | 'ascend',
/* 排序规则
   compare 排序规则
   multiple 多列排序优先级 谁最大那一列规则优先
   sorter: {
      compare: (a, b) =>a.key - b.key,
      multiple: 1,
    },
*/
   sorter:(a, b) => a.key - b.key
  }
# 表头分组
  children:[
    ...
  ]
]
```
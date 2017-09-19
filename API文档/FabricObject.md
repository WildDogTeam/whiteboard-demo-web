title: FabricObject
---

 `WildBoard` 上的图形实例 `FabricObject`。

## 方法

### updateOptions

##### 定义

`updateOptions(options)`

##### 说明

更新图形的样式。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| options | Object<br>样式 map |

</br>

---

### addToCanvas

##### 定义

`addToCanvas()`

##### 说明

添加到画布中。

</br>

---

### removeFromCanvas

##### 定义

`removeFromCanvas()`

##### 说明

从画布中移除。

</br>

---

### setSelectable

##### 定义

`setSelectable(boolean)`

##### 说明

设置图形是否能够被选中。

</br>

---

### id

##### 定义

`id()`

##### 说明

返回图形 id。

##### 返回值

`String`

</br>

---

### type

##### 定义

`type()`

##### 说明

返回图形类型。

##### 返回值

`String`

</br>

---

### toJSON

##### 定义

`toJSON()`

##### 说明

返回图形的所有信息。

##### 返回值

`String`

</br>

---

### setAsBackground

##### 定义

`setAsBackground()`

##### 说明

设为背景。

##### 返回值

`String`

</br>

---

###

### enterActiving

##### 定义

`enterActiving()`

##### 说明

将图形设为选中状态。

</br>

---

###

### exitEditing

##### 定义

`exitEditing()`

##### 说明

文字图形退出编辑状态。

</br>

---

###

### enterEditing

##### 定义

`enterEditing()`

##### 说明

文字图形进入编辑状态。

</br>

---


## 常量

### fire

##### 定义

`eventType`

##### 说明

可监听事件：

| 属性            | 说明                  |
| ------------- | ------------------- |
| boardInited     | 白板初始化时加载完所有现有图形触发的事件  `callback()` |
| objectAdded     | 有新图形展示到画布上时触发的事件  `callback(FabricObject)`  |
| objectSelected  | 图形被选中时触发   `callback(FabricObject)`   |
| objectModified  | 背景色（建议 rgba 格式） `callback(FabricObject)`   |
| objectDeselected | 填充色    `callback(FabricObject)`   |
| pageChanged     | 图形原点距离画布的顶端距离  `callback(Number)`  |


### style

##### 定义

`{width:100, height:200, ...}`

##### 说明

图形的可选样式表：

| 属性            | 说明                  |
| ------------- | ------------------- |
| width         | 宽                         |
| height        | gao高                      |
| angle         | 角度                       |
| backgroundColor | 背景色（建议 rgba 格式）    |
| fill          | 填充色                      |
| top           | 图形原点距离画布的顶端距离     |
| left          | 图形原点距离画布的左侧距离     |
| originX       | 图形的 X 轴原点（'center|top|...'）  |
| originY       | 图形的 Y 轴原点（'center|top|...'）  |
| scaleX        | X 轴方向的伸缩比             |
| scaleY        | Y 轴方向的伸缩比             |
| stroke        | 图形边的颜色（建议 rgba 格式） |
| strokeWidth   | 图形边的宽度                 |
| src           | 图片的地址（仅图片生效）       |
| text          | 文字图形的内容                |
| fontSize      | 文字图形的文字大小            |
| fontFamily    | 文字图形的文字类型            |
| charSpacing   | 文字图形的文字间隔字符个数      |
| x1            | 直线图形的起点 X 轴坐标        |
| y1            | 直线图形的起点 Y 轴坐标        |
| x2            | 直线图形的终点 X 轴坐标        |
| y2            | 直线图形的终点 Y 轴坐标        |

title: WildBoard
---

使用 `WildBoard` 实例进行白板的展示和操作。

## 方法

### ref

##### 定义

`ref()`

##### 说明

返回用户初始化时传入的 Sync.Reference 实例。

##### 返回值

[Sync.Reference](sync/Web/api/Reference.html)

</br>

---

### uid

##### 定义

`uid()`

##### 说明

返回用户初始化时传入的 uid 。

##### 返回值

`String`

</br>

---

### getOptions

##### 定义

`getOptions()`

##### 说明

返回白板的配置信息。

##### 返回值

`Object`

</br>

---

### setOption

##### 定义

`setOption(options)`

##### 说明

更新白板的配置信息。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| options | Object<br>可配置 write、width、height 三个参数 |

</br>

---

### setTool

##### 定义

`setTool(toolType[, options])`

##### 说明

设置当前的画笔工具，决定了使用鼠标或触摸事件绘制图形的样式。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| toolType | String<br> "Pen","Cricle","Rect","Triangle","Default", 其中 default 为关闭画笔|
| options | Object<br> 设置画笔样式。[options](WildBoard.html#style) |

</br>

---

### changeZoom

##### 定义

`changeZoom(indexArray, zoomValue)`

##### 说明

修改白板可视窗口的缩放比。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| indexArray | Array<br> canvas中的坐标，将会以该坐标为中心进行缩放 |
| zoomValue | Number<br> 缩放的具体比例 |

</br>

---

### undo

##### 定义

`undo()`

##### 说明

撤销，返回到上一步。此方法只针对当前page的操作，如翻页等操作将会清空操作缓存。

</br>

---

### redo

##### 定义

`redo()`

##### 说明

下一步。配合 undo 使用。

</br>

---

### changePage

##### 定义

`changePage(num)`

##### 说明

修改当前页面并进行跳转。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| num | Number<br> 所要跳转的页码 |

</br>

---

### clearPage

##### 定义

`clearPage(num)`

##### 说明

清空该页，如不传页码将会清空所以白板内容。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| num | Number<br> 要清空页的页码 |

</br>

---

### currentPage

##### 定义

`currentPage()`

##### 说明

返回当前页码。

##### 返回值

`Number`

</br>

---

### getObjects

##### 定义

`currentPage()`

##### 说明

返回当前页面中所展示的所以对象。

##### 返回值

`Object` 包含所有对象的map。

</br>

---

### createRect

##### 定义

`createRect(options)`

##### 说明

创建一个矩形。需调用addToCanvas()添加到画布。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| options | Object<br> 矩形的样式 |

##### 返回值

`FabricObject`

</br>

---

### createTriangle

##### 定义

`createRect(options)`

##### 说明

创建一个三角形。需调用addToCanvas()添加到画布。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| options | Object<br> 三角形的样式 |

##### 返回值

`FabricObject`

</br>

---

### createCircle

##### 定义

`createCircle(options)`

##### 说明

创建一个圆形。需调用addToCanvas()添加到画布。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| options | Object<br> 圆形的样式 |

##### 返回值

`FabricObject`

</br>

---

### createImage

##### 定义

`createImage(url, options)`

##### 说明

创建一个图片。需调用addToCanvas()添加到画布。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| url     | String<br> 图片的地址 |
| options | Object<br> 图片的样式 |

##### 返回值

`FabricObject`

</br>

---

### createPath

##### 定义

`createPath(path, options)`

##### 说明

创建一个 SVG 图形。需调用addToCanvas()添加到画布。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| path     | String<br> 图片的地址 |
| options | Object<br> 图片的样式 |

##### 返回值

`FabricObject`

</br>

---

### createLine

##### 定义

`createLine(points, options)`

##### 说明

创建一个条直线。需调用addToCanvas()添加到画布。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| points     | Array<br> 起点和终点的坐标，坐标也采用数组形势，如：[[x1,y1],[x2,y2]] |
| options | Object<br> 直线的样式 |

##### 返回值

`FabricObject`

</br>

---

### createText

##### 定义

`createText(text, options)`

##### 说明

创建一个文字图形。需调用addToCanvas()添加到画布。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| text     | String<br> 文字内容 |
| options | Object<br> 文字图形的样式 |

##### 返回值

`FabricObject`

</br>

---

### setBackgroundColor

##### 定义

`setBackgroundColor(color)`

##### 说明

设置画布背景颜色。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| color     | String<br> 背景色，建议 rgba |
| options | Object<br> 文字图形的样式 |

</br>

---

### setBackgroundImg

##### 定义

`setBackgroundImg(imgObj)`

##### 说明

设置背景图片。

##### 参数

| 参数名| 说明                                  |
| ---- | ----------------------------------- |
| imgObj     | FabricObject|String<br> 图片对象或者是一个图片地址 |

</br>

---

### getActiveObject

##### 定义

`getActiveObject()`

##### 说明

获取当前被选中的对象。

##### 返回值

`FabricObject`

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

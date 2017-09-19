var $ = function(id) {
    return document.getElementById(id)
};

var wdBoard;

var initWildBoard = function(appId, path, uid, options) {
    var config = {
        syncURL: "https://" + appId + ".wilddogio.com/" + path, //输入节点 URL
        authDomain: appId + '.wilddog.com',
        websocketOnly: true
    };
    wilddog.initializeApp(config);
    var ref = wilddog.sync();
    wdBoard = new WildBoard(ref, uid, 'canvas', options);
    wdBoard.on('boardInited', function () {
        console.log('boardInited---',Date.now())
    });
};

var uid = Date.now();

var boardConfig = {
    width: 1024,
    height: 576,
    write: true
}

// 将 appId 更新为私人野狗 appId 
initWildBoard('<appId>', 'whiteboard', uid, boardConfig);

var currentTool = null;
var currentColor = $('color-0');
var currentSize = $('stroke-width-0');
var isText = false;
var colorOptions = ['rgb(253,62,57)', 'rgb(253,149,39)', 'rgb(81,215,106)', 'rgb(22,128,250)', 'rgb(203,203,203)', 'rgb(11,11,11)'];
var strokeWidthOptions = [2, 6, 10];
var fontSizeOptions = [18, 28, 40];

var styleCache = {
    Pen: {
        strokeWidthIndex: 0,
        colorIndex: 0,
    },
    Line: {
        strokeWidthIndex: 0,
        colorIndex: 0,
    },
    Rect: {
        strokeWidthIndex: 0,
        colorIndex: 0,
    },
    Circle: {
        strokeWidthIndex: 0,
        colorIndex: 0,
    },
    IText: {
        strokeWidthIndex: 0,
        colorIndex: 0,
    }
}

var addToolListener = function(elId) {
    if (currentTool !== $(elId)) {
        currentSize.classList.remove('size-select-frame');
        if (elId === 'IText') {
            $('stroke-size-div').hidden = true;
            $('font-size-div').hidden = false;
            currentSize = $('font-size-' + styleCache[elId].strokeWidthIndex);
            currentSize.classList.add('size-select-frame');
        } else {
            $('stroke-size-div').hidden = false;
            $('font-size-div').hidden = true;
            currentSize = $('stroke-width-' + styleCache[elId].strokeWidthIndex);
            currentSize.classList.add('size-select-frame');
        };
        currentColor.classList.remove('color-select-frame');
        currentColor = $('color-' + styleCache[elId].colorIndex);
        currentColor.classList.add('color-select-frame');
        if (currentTool !== null) {
            currentTool.style.backgroundColor = '#3C3C3C';
        };
        currentTool = $(elId);
        currentTool.style.backgroundColor = '#242424';
        $('tool-style').style.marginTop = -50;
        if (elId === 'IText') {
            options = {
                fill: colorOptions[styleCache[elId].colorIndex],
                fontSize: fontSizeOptions[styleCache[elId].strokeWidthIndex],
            }
            wdBoard.on('objectAdded', createTextSingle);
        } else {
            options = {
                stroke: colorOptions[styleCache[elId].colorIndex],
                strokeWidth: strokeWidthOptions[styleCache[elId].strokeWidthIndex],
                fill: 'rgba(0,0,0,0)'
            }
        }
        wdBoard.setTool(elId, options);
    } else {
        setToolToDefault();
    };
};

var setToolToDefault = function() {
    $('tool-style').style.marginTop = 25;
    currentTool.style.backgroundColor = '#3C3C3C';
    currentTool = null;
    wdBoard.setTool('Default', {});
}

var addColorListener = function(elId, type) {
    var object = wdBoard.getActiveObject();
    var type = currentTool ? currentTool.id : object.type();
    var id = elId.split('-')[1];
    currentColor.classList.remove('color-select-frame');
    currentColor = $(elId);
    currentColor.classList.add('color-select-frame');
    styleCache[type].colorIndex = id;
    var options;
    if (type === 'IText') {
        options = {
            fill: colorOptions[styleCache[type].colorIndex],
            fontSize: fontSizeOptions[styleCache[type].strokeWidthIndex],
        }
    } else {
        options = {
            stroke: colorOptions[styleCache[type].colorIndex],
            strokeWidth: strokeWidthOptions[styleCache[type].strokeWidthIndex],
            fill: 'rgba(0,0,0,0)'
        }
    };
    if (currentTool) {
        wdBoard.setTool(type, options);
    } else {
        object.updateOptions(options);
    }
};

var addSizeListener = function(elId) {
    var object = wdBoard.getActiveObject();
    var type = currentTool ? currentTool.id : object.type();
    var id = elId.split('-')[2];
    currentSize.classList.remove('size-select-frame');
    currentSize = $(elId);
    currentSize.classList.add('size-select-frame');
    styleCache[type].strokeWidthIndex = id;
    var options;
    if (type === 'IText') {
        options = {
            fill: colorOptions[styleCache[type].colorIndex],
            fontSize: fontSizeOptions[styleCache[type].strokeWidthIndex],
        }
    } else {
        options = {
            stroke: colorOptions[styleCache[type].colorIndex],
            strokeWidth: strokeWidthOptions[styleCache[type].strokeWidthIndex],
            fill: 'rgba(0,0,0,0)'
        }
    }
    if (currentTool) {
        wdBoard.setTool(type, options);
    } else {
        object.updateOptions(options);
    }
};

$('Pen').onclick = function() {
    addToolListener('Pen');
};
$('Line').onclick = function() {
    addToolListener('Line');
};
$('Rect').onclick = function() {
    addToolListener('Rect');
};
$('Circle').onclick = function() {
    addToolListener('Circle');
};
$('IText').onclick = function() {
    addToolListener('IText');
};
$('Undo').onclick = function() {
    wdBoard.undo();
};
$('Clear').onclick = function() {
    var selectedObject = wdBoard.getActiveObject();
    if (selectedObject) {
        selectedObject.removeFromCanvas();
    } else {
        $('tool-tip').hidden = false;
    };
};

$('color-0').onclick = function() {
    addColorListener('color-0');
}
$('color-1').onclick = function() {
    addColorListener('color-1');
}
$('color-2').onclick = function() {
    addColorListener('color-2');
}
$('color-3').onclick = function() {
    addColorListener('color-3');
}
$('color-4').onclick = function() {
    addColorListener('color-4');
}
$('color-5').onclick = function() {
    addColorListener('color-5');
};

$('stroke-width-0').onclick = function() {
    addSizeListener('stroke-width-0');
}
$('stroke-width-1').onclick = function() {
    addSizeListener('stroke-width-1');
}
$('stroke-width-2').onclick = function() {
    addSizeListener('stroke-width-2');
}
$('font-size-0').onclick = function() {
    addSizeListener('font-size-0');
}
$('font-size-1').onclick = function() {
    addSizeListener('font-size-1');
}
$('font-size-2').onclick = function() {
    addSizeListener('font-size-2');
}

var objectSelectedHandler = function(object) {
    if (object.type() === "Image") {
        return;
    };
    $('tool-style').style.marginTop = -50;
    currentSize.classList.remove('size-select-frame');
    if (object.type() === 'IText') {
        $('stroke-size-div').hidden = true;
        $('font-size-div').hidden = false;
        currentSize = $('font-size-' + fontSizeOptions.indexOf(object.toJSON().style.fontSize));
        currentSize.classList.add('size-select-frame');
    } else {
        $('stroke-size-div').hidden = false;
        $('font-size-div').hidden = true;
        currentSize = $('stroke-width-' + strokeWidthOptions.indexOf(object.toJSON().style.strokeWidth));
        currentSize.classList.add('size-select-frame');
    };
    if (object.toJSON().style.stroke) {
        currentColor.classList.remove('color-select-frame');
        currentColor = $('color-' + colorOptions.indexOf(object.toJSON().style.stroke));
        currentColor.classList.add('color-select-frame');
    }
};

var objectDeselectedHandler = function(object) {
    if (currentTool == null) {
        $('tool-style').style.marginTop = 25;
    }
}

wdBoard.on('objectSelected', objectSelectedHandler);
wdBoard.on('objectDeselected', objectDeselectedHandler)

var createTextSingle = function(object) {
    if (object.toJSON().type === 'IText' && object.toJSON().authorId === uid) {
        setToolToDefault();
    };
    setTimeout(function() {
        wdBoard.off('objectAdded', createTextSingle);
    }, 0);
}

var uploader = Qiniu.uploader({
    runtimes: 'html5,flash,html4', //上传模式,依次退化
    browse_button: 'Image', //上传选择的点选按钮，**必需**
    uptoken_url: $('uptoken_url').value, //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
    domain: $('domain').value, //bucket 域名，下载资源时用到，**必需**
    get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
    max_file_size: '100mb', //最大文件体积限制
    flash_swf_url: 'js/plupload/Moxie.swf', //引入flash,相对路径
    max_retries: 3, //上传失败最大重试次数
    dragdrop: false, //开启可拖曳上传
    chunk_size: '4mb', //分块上传时，每片的体积
    auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
    init: {
        'FileUploaded': function(up, file, info) {
            var domain = up.getOption('domain');
            var res = JSON.parse(info.response);
            var sourceLink = domain + '/' + res.key;
            var img = wdBoard.createImage(sourceLink);
            img.addToCanvas();
            var style = img.toJSON();
        },
        'Error': function(up, err, errTip) {
            console.error(err);
        },
        'Key': function(up, file) {
            var key = Date.now();
            return key
        }
    }
});

var booleanValue = true;

function deleteFile(key) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            var message = req.responseText;
            if (req.status == 200) {
                //success
            } else {
                //failed
            }
        }
    }
    req.open('GET', 'http://127.0.0.1:3000/delete?bucket=wilddaog&key='+key, true);
    req.onerror = function (err) {
        console.error(err);
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send();
}

$('close-tool-tip-btn').onclick = function () {
    $('tool-tip').hidden = true
}

$('tooltip-confirm-btn').onclick = function () {
    wdBoard.clearPage(0);
    $('tool-tip').hidden = true
}

$('tooltip-cancel-btn').onclick = function () {
    $('tool-tip').hidden = true
}

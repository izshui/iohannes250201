(function() {
  var wechatMessage = function() {
    this.messageContainer = $('.message-container');
    this.timelineContainer = $('.timeline-container');
    this.pageStart = 0; // 开始页码
    this.pageEnd = 0; // 结束页码
    this.pageSize = 50; // 每页加载条数
    this.total = 0; // 总条数
  }

  wechatMessage.prototype.init = function() {
    var self = this, time = 0, messageTimelineArray = {}, imageTimelineArray = {}, videoTimelineArray = {}, imageArray = [];
    this.total = data.message.length || 0;

    console.log(`循环${data.message.length}条消息耗时：`);
    console.time();
    for(var i = 0, l = data.message.length; i < l; i++) {
      var item = data.message[i];
      
      //右侧timeline对应的model
      var nowtime = new Date(item.m_uiCreateTime * 1000);
      var year = nowtime.getFullYear(), month = nowtime.getMonth() + 1;

      if(item.m_nsRealChatUsr) {
        item.m_nsFromUsr = item.m_nsRealChatUsr;
      }
      if(!messageTimelineArray[year]) {
        messageTimelineArray[year] = {};
      }
      if(!messageTimelineArray[year][month]) {
        messageTimelineArray[year][month] = {
          href: "m_" + item.m_uiMesLocalID,
          text: month,
          itemIndex: i,
        };
      }

      //10分钟加一次时间吧
      if(nowtime - time >= 10 * 60 * 1000) {
        data.message.splice(i, 0, {
          "m_uiCreateTime" : item.m_uiCreateTime,
          "m_uiMessageType" : "time",
          "m_nsContent" : this.convertTimeToString(item.m_uiCreateTime)
        })
        i++;
        l++;
        time = nowtime.getTime();
      }
      //图片timeline
      if(item.m_uiMessageType === 3) {
        if(!imageTimelineArray[year]) {
          imageTimelineArray[year] = {};
        }
        if(!imageTimelineArray[year][month]) {
          imageTimelineArray[year][month] = {
            href: "i_" + item.m_uiMesLocalID,
            text: month
          };
        }
        item.imageIndex = imageArray.length;
        imageArray.push(item.m_nsContent);
      }

      item.from = data.member[item.m_nsFromUsr] || {};
      item.to = data.member[item.m_nsToUsr] || {};
    }

    console.timeEnd();

    
    $('#name').html(data.owner.name);
    this.renderMessage();

    setTimeout(function() {
      self.renderVideo(this.pageStart, this.pageStart + this.pageSize - 1);
      self.renderImage(this.pageStart, this.pageStart + this.pageSize - 1);
      $('.video-item').load();
    }, 2000);

    //右侧timeline
    var timelineTemplate = document.getElementById('timelineTemplate').innerHTML;
    
    var messageTimelineHtml = tppl(timelineTemplate, {
      data: messageTimelineArray
    });
    $('#messageTimeline').append(messageTimelineHtml);

    window.wechatImages = imageArray;
    this.bindEvents();
  };

  wechatMessage.prototype.parseXML = function(xml) {
    var xmlDoc;
    //if(xml.indexOf('<?xml version=\"1.0\"?>\n') === 0) {
      //xml = xml.substr(xml.indexOf('<msg'));
      //xml = xml.replace(/[\n\t]/g, '');
    //}
    xml = xml.replace(/[\n\t]/g, '');
    if(xml.indexOf('<voipinvitemsg>') === 0) {
      xml += '</msg>';
      xml = '<msg>' + xml;
    }
    //Internet Explorer
    if(window.ActiveXObject) {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async="false";
      xmlDoc.loadXML(xml);
    } 
    else {
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(xml, "text/xml");
    }
    return xmlDoc;
  };

  wechatMessage.prototype.xmlToJSON = function(xmlObj,nodename,isarray) {
    var obj=$(xmlObj);
    var itemobj={};
    var nodenames="";
    var getAllAttrs=function(node){//递归解析xml 转换成json对象
       var _itemobj={};
       var notNull=false;
       var nodechilds=node.childNodes;
       var childlenght=nodechilds.length;
       var _attrs=node.attributes;
       var firstnodeName="#text";
       try{
         firstnodeName=nodechilds[0].nodeName;
       }catch(e){  }
       if((childlenght>0&&firstnodeName!="#text")|| (_attrs && _attrs.length>0)){
          var _childs=nodechilds;
          var _childslength=nodechilds.length;
          var _fileName_="";
          if(undefined!=_attrs){
            var _attrslength=_attrs.length;
            for(var i=0; i<_attrslength; i++){//解析xml节点属性
             var attrname=_attrs[i].nodeName;
             var attrvalue=_attrs[i].nodeValue;
             _itemobj[attrname]=attrvalue;
            }
          }
        for (var j = 0; j < _childslength; j++) {//解析xml子节点
           var _node = _childs[j];
           var _fildName = _node.nodeName;
           if("#text"==_fildName){break;};
           if(_itemobj[_fildName]!=undefined){//如果有重复的节点需要转为数组格式
             if(!(_itemobj[_fildName] instanceof Array)){
               var a=_itemobj[_fildName];
               _itemobj[_fildName]=[a];//如果该节点出现大于一个的情况 把第一个的值存放到数组中
             }
           }
           var _fildValue=getAllAttrs(_node);
           try{
             _itemobj[_fildName].push(_fildValue);
           }catch(e){
             _itemobj[_fildName]=_fildValue;
             _itemobj["length"]=1;
           }
          }
       }else{
         _itemobj=(node.textContent==undefined)?node.text:node.textContent;
       }
       return _itemobj;
     };
    if(nodename){
     nodenames=nodename.split("/")
    }
    for(var i=0;i<nodenames.length;i++){
      obj=obj.find(nodenames[i]);
    }
    $(obj).each(function(key,item){
      if(itemobj[item.nodeName]!=undefined){
        if(!(itemobj[item.nodeName] instanceof Array)){
          var a=itemobj[item.nodeName];
          itemobj[item.nodeName]=[a];
        }
        itemobj[item.nodeName].push(getAllAttrs(item));
      }else{
        if(nodenames.length>0){
          itemobj[item.nodeName]=getAllAttrs(item);
        }else{
          itemobj[item.firstChild.nodeName]=getAllAttrs(item.firstChild);
        }
      }
    });
    if(nodenames.length>1){
      itemobj=itemobj[nodenames[nodenames.length-1]];
    }
    if(isarray&&!(itemobj instanceof Array)&&itemobj!=undefined){
      itemobj=[itemobj];
    }
    return itemobj;
  };

  wechatMessage.prototype.convertTimeToString = function(time) {
    time = time * 1000;
    var date = new Date(time);
    return date.getFullYear() + '-' + this.getTwoDigitNumer(date.getMonth() + 1) + '-' + this.getTwoDigitNumer(date.getDate()) + ' ' + this.getTwoDigitNumer(date.getHours()) + ':' + this.getTwoDigitNumer(date.getMinutes())
  };

  wechatMessage.prototype.getTwoDigitNumer = function(num) {
    return num >= 10? num : '0' + num
  };

  // 获取当前应该渲染的消息内容
  wechatMessage.prototype.getMessageHTML = function (start, end) {
    var template = document.getElementById('myTemplate').innerHTML;
    const dataRenderPiece = data.message.slice(start, end)
    
    return tppl(template, {
      data: this.msgFormat(dataRenderPiece),
      from: data.from,
    });
  }

  wechatMessage.prototype.msgFormat = function(dataSource) {
    const array = [...dataSource];
    var time = 0;

    const result = array.map(item => {
      var nowtime = new Date(item.m_uiCreateTime * 1000);
      try {
        //非xml结构不解析
      if(item.m_uiMessageType !== 1 
        && item.m_uiMessageType !== 3 
        && item.m_uiMessageType !== 43 
        && item.m_uiMessageType !== 62
        && item.m_uiMessageType !== 34 
        && item.m_nsContent.indexOf('<') === 0 
        && item.m_nsContent.indexOf('SystemMessages_HongbaoIcon.png') < 0) {
          item.m_nsContent = this.xmlToJSON(this.parseXML(item.m_nsContent))  
      }
      } catch (error) {
        console.error(error, item);
      }

      return item;
    })

    return result;
    
  }
  wechatMessage.prototype.renderMessage = function() {
    const html = this.getMessageHTML(0, this.pageSize);
    
    this.messageContainer.append(html);
  };

  wechatMessage.prototype.renderVideo = function(start, end) {
    const html = this.getVideoHTML(start, end);
    $('.video-container').append(html);
  };
  // 获取当前应该渲染的图片内容
  wechatMessage.prototype.getImageHTML = function(start, end) {
    var template = document.getElementById('imageTemplate').innerHTML;
    const renderDataPiece = data.message.slice(start, end);

    return tppl(template, {
      data: renderDataPiece,
    });
  };

  wechatMessage.prototype.renderImage = function(start, end) {
    const html = this.getImageHTML(start, end);
    $('.image-container').append(html);
  };
  // 获取当前应该渲染的视频内容
  wechatMessage.prototype.getVideoHTML = function(start, end) {
    var template = document.getElementById('videoTemplate').innerHTML;
    const renderDataPiece = data.message.slice(start, end);

    return tppl(template, {
      data: renderDataPiece
    });
  };
  // 加载前一页图片内容
  wechatMessage.prototype.addPrevImage = function(start, end) {
    const html = this.getImageHTML(start, end);
    $('.image-container').prepend(html);
  };

  // 加载前一页消息
  wechatMessage.prototype.addPrevMessage = function(start, end) {
    const html = this.getMessageHTML(start, end);
    this.messageContainer.prepend(html);
  };
  // 加载前一页视频
  wechatMessage.prototype.addPreVideo = function(start, end) {
    const html = this.getVideoHTML(start, end);
    $('.video-container').prepend(html);
  };
  // 加载前一页
  wechatMessage.prototype.addPrevPage = function () {
    if (this.pageStart === 0) {
      return;
    }
    // 边界处理
    this.pageStart = this.pageStart - this.pageSize < 0 ? 0 : this.pageStart - this.pageSize;
    const end = this.pageStart + this.pageSize - 1;
    // 插入前高度记录
    const preScrollTop = this.messageContainer.scrollTop();
    const preHeight = this.messageContainer[0].scrollHeight;
    // 加载消息
    this.addPrevMessage(this.pageStart, end);
    // 加载图片
    this.addPrevImage(this.pageStart, end);
    // 加载视频
    this.addPreVideo(this.pageStart, end);
    // 插入后高度记录
    const nowHeight = this.messageContainer[0].scrollHeight;
    const minus = nowHeight - preHeight;

    // 滚动条归位
    this.messageContainer.scrollTop(preScrollTop + minus);

    // 图片渲染
    setTimeout(() => {
      this.renderVideo(this.pageStart, this.pageStart + this.pageSize - 1);
      this.renderImage(this.pageStart, this.pageStart + this.pageSize - 1);
      $('.video-item').load();
    })
  }
  // 加载后一页消息
  wechatMessage.prototype.addNextMessage = function(start, end) {
    const html = this.getMessageHTML(start, end);

    this.messageContainer.append(html);
  }
  // 加载后一页图片
  wechatMessage.prototype.addNextImage = function(start, end) {
    const html = this.getImageHTML(start, end);
    $('.image-container').append(html);
  }
  // 加载后一页视频
  wechatMessage.prototype.addNextVideo = function(start, end) {
    const html = this.getVideoHTML(start, end);
    $('.video-container').append(html);
  }
  // 加载后一页
  wechatMessage.prototype.addNextPage = function () {
    if (this.pageEnd === this.total) {
      return;
    }
    this.pageEnd = this.pageEnd + this.pageSize;
    const end = this.pageEnd + this.pageSize - 1;
    // 加载消息
    this.addNextMessage(this.pageEnd, end);
    // 加载图片
    this.addNextImage(this.pageEnd, end);
    // 加载视频
    this.addNextVideo(this.pageEnd, end);
  }
  // 重新渲染
  wechatMessage.prototype.reRender = function (index) {
    this.pageStart = +index;
    this.pageEnd = +index;

    const html = this.getMessageHTML(index, +index + this.pageSize - 1);

    this.messageContainer.empty();
    this.messageContainer.append(html);

    setTimeout(() => {
      this.messageContainer.scrollTop(10);
    }, 0)
  };

  wechatMessage.prototype.bindEvents = function() {
    var self = this,
        messageContainer = $('.message-container'), 
        containerHeight = messageContainer.height(), body = $('body');
    $('.tab-item').on('click', function() {
      var $this = $(this);
      if(!$this.hasClass('selected-item')) {
        $('.selected-item').removeClass('selected-item');
        $this.addClass('selected-item');
        $('.current-tab').removeClass('current-tab');
        $('.' + this.id + '-container').addClass('current-tab');
        $('.current-timeline').removeClass('current-timeline');
        $('#' + this.id + 'Timeline').addClass('current-timeline');
      }
    });

    $('.message-container').on('scroll', (e) => {
      const { offsetHeight, scrollTop, scrollHeight } = e.target;
      // 触顶
      if (scrollTop === 0) {
        this.addPrevPage();
      }
      // 触底
      if (scrollHeight - scrollTop - offsetHeight === 0) {
        this.addNextPage();
      }
      
    });
    //timeline年份点击展开
    body.delegate('.timeline-year > h4', 'click', function() {
      var timelineYear = $(this).parent();
      if(!timelineYear.hasClass('current-timeline-year')) {
        $('.current-timeline-year').removeClass('current-timeline-year');
        timelineYear.addClass('current-timeline-year');
      }
    });

    //timeline月份点击改样式
    body.delegate('.timeline-month', 'click', function(e) {
      var $this = $(this);
      if(!$this.hasClass('current-timeline-month')) {
        $('.current-timeline-month').removeClass('current-timeline-month');
        $this.addClass('current-timeline-month');
      }
      // 重新渲染
      const { currentTarget } = e;
      const pageindex = $(currentTarget).attr('pageindex');
      
      self.reRender(pageindex);
    });

    //语音点击
    body.delegate('.voice-img', 'click', function() {
      var $this = $(this), audio = $this.prev('audio');
      if(audio && audio.length) {
        audio = audio[0];
        if(typeof audio.onplay !== 'function') {
          audio.onplay = function() {
            $this.addClass('voice-img-playing');
          }
          audio.onpause = function() {
            $this.removeClass('voice-img-playing');
          }
        }
        if(audio.paused) {
          audio.play();
        }
        else {
          audio.pause();
        }
      }
    });

    //视频点击
    body.delegate('.play-layer', 'click', function() {
      var $this = $(this), video = $this.prev('video');
      if(video && video.length) {
        video = video[0];
        if(typeof video.onplay !== 'function') {
          video.onplay = function() {
            $this.hide();
          }
          video.onpause = function() {
            $this.show();
          }
        }
        if(video.paused) {
          //video.play();
          self.requestFullScreen(video);
          video.play();
        }
      }
    });

    body.delegate('#prev_image', 'click', function(e) {
      alert(1)
      e.stopPropagation();
      return false;
    });

  };

  wechatMessage.prototype.requestFullScreen = function (video) {
    var fullscreen = this.fullSreen(video);
    video[fullscreen]();
  };

  wechatMessage.prototype.fullSreen = function (elem) {
    var prefix, domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
    // Mozilla and webkit intialise fullscreen slightly differently
    for (var i = -1, len = domPrefixes.length; ++i < len;) {
        prefix = domPrefixes[i].toLowerCase();
        if (elem[prefix + 'EnterFullScreen']) {
            // Webkit uses EnterFullScreen for video
            return prefix + 'EnterFullScreen';
        } else if (elem[prefix + 'RequestFullScreen']) {
            // Mozilla uses RequestFullScreen for all elements and webkit uses it for non video elements
            return prefix + 'RequestFullScreen';
        }
    }
    return false;
  };

  new wechatMessage().init();
})()
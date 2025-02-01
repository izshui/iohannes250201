import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'html': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'minWidth': [{ 'unit': 'px', 'value': 1180 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.42857143 }],
    'fontFamily': '"PingFangSC-Regular", "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'backgroundImage': '-webkit-linear-gradient(-179deg, rgba(79,76,74,0.4) 0%, #272524 71%)',
    'backgroundImage': 'linear-gradient(-179deg, rgba(79,76,74,0.4) 0%, #272524 71%)'
  },
  'left': {
    'float': 'left'
  },
  'right': {
    'float': 'right'
  },
  'inline-block': {
    'display': 'inline-block'
  },
  'relative': {
    'position': 'relative'
  },
  'text-center': {
    'textAlign': 'center'
  },
  'clearfix': {
    'zoom': '1'
  },
  'clearfix:before': {
    'content': '""',
    'display': 'table'
  },
  'clearfix:after': {
    'content': '""',
    'display': 'table'
  },
  'clearfix:after': {
    'clear': 'both'
  },
  'text-nowrap': {
    'whiteSpace': 'nowrap',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'aside': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  'main': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.2 }],
    'background': '#eee',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.30)' }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'title': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'WebkitBoxSizing': 'border-box',
    'boxSizing': 'border-box',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'background': '#f6f6f6',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(209,209,209,0.50)' }],
    'zIndex': '10'
  },
  'action-bar': {
    'marginTop': [{ 'unit': 'px', 'value': 14 }]
  },
  'tab-item': {
    'height': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'marginRight': [{ 'unit': 'px', 'value': 28 }],
    'verticalAlign': 'top',
    'backgroundSize': '100%'
  },
  'action-bar > tab-item:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  '#message': {
    'backgroundImage': 'url('../img/all_normal.png')'
  },
  '#image': {
    'backgroundImage': 'url('../img/image_normal.png')'
  },
  '#video': {
    'backgroundImage': 'url('../img/video_normal.png')'
  },
  '#messageselected-item': {
    'backgroundImage': 'url('../img/all_selected.png')'
  },
  '#imageselected-item': {
    'backgroundImage': 'url('../img/image_selected.png')'
  },
  '#videoselected-item': {
    'backgroundImage': 'url('../img/video_selected.png')'
  },
  'message-text-container': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'message-container': {
    'opacity': '0',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'WebkitBoxSizing': 'border-box',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'overflowY': 'auto',
    'transition': 'all 0.5s'
  },
  'image-container': {
    'opacity': '0',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'WebkitBoxSizing': 'border-box',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'overflowY': 'auto',
    'transition': 'all 0.5s'
  },
  'video-container': {
    'opacity': '0',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'WebkitBoxSizing': 'border-box',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'overflowY': 'auto',
    'transition': 'all 0.5s'
  },
  'current-tab': {
    'opacity': '1',
    'zIndex': '1'
  },
  'message-time': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 110 }],
    'backgroundColor': 'rgba(0, 0, 0, 0.1)',
    'borderRadius': '2px',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }],
    'lineHeight': [{ 'unit': 'px', 'value': 18 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#ffffff'
  },
  'message-tip-container': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.4 }],
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'message-tip': {
    'display': 'inline-block',
    'backgroundColor': 'rgba(0, 0, 0, 0.1)',
    'borderRadius': '2px',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'lineHeight': [{ 'unit': 'px', 'value': 18 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#ffffff'
  },
  'message-avatar': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '2px',
    'MozBorderRadius': '2px',
    'WebkitBorderRadius': '2px',
    'cursor': 'pointer'
  },
  'arrow-right': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'solid' }],
    'borderColor': 'rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) rgba(177,227,124,1)'
  },
  'arrow-left': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 8 }],
    'borderColor': 'rgba(0,0,0,0) rgba(255,255,255,1) rgba(0,0,0,0) rgba(0,0,0,0)'
  },
  'message-content': {
    'maxWidth': [{ 'unit': 'px', 'value': 420 }],
    'wordWrap': 'break-word',
    'backgroundColor': '#b1e37c',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '2px'
  },
  'message-content-left': {
    'maxWidth': [{ 'unit': 'px', 'value': 420 }],
    'wordWrap': 'break-word',
    'backgroundColor': '#ffffff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '2px'
  },
  'message-img': {
    'width': [{ 'unit': 'px', 'value': 180 }],
    'borderRadius': '2px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'cursor': 'pointer',
    'cursor': '-webkit-zoom-in',
    'cursor': '-moz-zoom-in',
    'verticalAlign': 'top'
  },
  'message-video': {
    'width': [{ 'unit': 'px', 'value': 240 }],
    'borderRadius': '2px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'message-link': {
    'width': [{ 'unit': 'px', 'value': 240 }],
    'minHeight': [{ 'unit': 'px', 'value': 40 }],
    'backgroundColor': '#ffffff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '2px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'textDecoration': 'none',
    'color': '#333'
  },
  'message-link h4': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '500',
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'wordWrap': 'break-word'
  },
  'message-link-description': {
    'minHeight': [{ 'unit': 'px', 'value': 50 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#9c9c9c',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'message-link-icon': {
    'marginTop': [{ 'unit': 'px', 'value': 4 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'backgroundImage': 'url('../img/wechat/link.jpg')',
    'backgroundSize': '100%'
  },
  'message-sp-icon': {
    'marginTop': [{ 'unit': 'px', 'value': 4 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'backgroundImage': 'url('../img/wechat/wechat-icon.jpg')',
    'backgroundSize': '100%'
  },
  'red-bag': {
    'width': [{ 'unit': 'px', 'value': 240 }],
    'backgroundColor': '#fff',
    'borderRadius': '2px',
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'red-bag-title': {
    'backgroundColor': '#fc9d2b',
    'borderRadius': '2px 2px 0px 0px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'red-bag-img': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 47 }],
    'backgroundImage': 'url('../img/wechat/redbag.png')',
    'backgroundSize': '100%'
  },
  'red-bag-text': {
    'marginLeft': [{ 'unit': 'px', 'value': 50 }]
  },
  'red-bag-text h4': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'maxWidth': [{ 'unit': 'px', 'value': 180 }],
    'minHeight': [{ 'unit': 'px', 'value': 50 }],
    'fontWeight': '500',
    'wordWrap': 'break-word'
  },
  'red-bag-tip': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': 'rgba(255, 255, 255, 0.8)'
  },
  'red-bag-bottom': {
    'lineHeight': [{ 'unit': 'px', 'value': 22 }],
    'textIndent': '10px',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#999'
  },
  'red-bag-received': {
    'opacity': '0.5'
  },
  'red-bag-icon': {
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'marginTop': [{ 'unit': 'px', 'value': 1 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'backgroundImage': 'url('../img/wechat/redbag.png')',
    'backgroundSize': '100%',
    'verticalAlign': 'top'
  },
  'red-bag-color': {
    'color': '#fc9d2b'
  },
  'file-message': {
    'maxWidth': [{ 'unit': 'px', 'value': 280 }],
    'minHeight': [{ 'unit': 'px', 'value': 40 }],
    'backgroundColor': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '2px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'file-img': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'backgroundSize': '100%'
  },
  'file-zip': {
    'backgroundImage': 'url('../img/wechat/zip.jpg')'
  },
  'file-txt': {
    'backgroundImage': 'url('../img/wechat/txt.jpg')'
  },
  'file-doc': {
    'backgroundImage': 'url('../img/wechat/doc.jpg')'
  },
  'file-pdf': {
    'backgroundImage': 'url('../img/wechat/pdf.jpg')'
  },
  'file-xls': {
    'backgroundImage': 'url('../img/wechat/xls.jpg')'
  },
  'file-unknown': {
    'backgroundImage': 'url('../img/wechat/unknown.jpg')'
  },
  'file-name': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'file-name h4': {
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '500',
    'maxWidth': [{ 'unit': 'px', 'value': 180 }],
    'wordWrap': 'break-word'
  },
  'file-size': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#9c9c9c',
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'voice-img': {
    'minWidth': [{ 'unit': 'px', 'value': 20 }],
    'maxWidth': [{ 'unit': 'px', 'value': 240 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'backgroundSize': '20px auto',
    'backgroundRepeat': 'no-repeat',
    'verticalAlign': 'top',
    'cursor': 'pointer'
  },
  'voice-right-img': {
    'backgroundImage': 'url('../img/wechat/voice_right.png')'
  },
  'voice-img-playingvoice-right-img': {
    'backgroundImage': 'url('../img/wechat/voice_right_click.gif')'
  },
  'voice-left-img': {
    'backgroundImage': 'url('../img/wechat/voice_left.png')'
  },
  'voice-img-playingvoice-left-img': {
    'backgroundImage': 'url('../img/wechat/voice_left_click.gif')'
  },
  'voice-duration': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'color': '#7f7f7f'
  },
  'voice-duration-right': {
    'left': [{ 'unit': 'px', 'value': -8 }],
    'transform': 'translateX(-100%)'
  },
  'voice-duration-left': {
    'right': [{ 'unit': 'px', 'value': -8 }],
    'transform': 'translateX(100%)'
  },
  'user-card': {
    'width': [{ 'unit': 'px', 'value': 240 }],
    'backgroundColor': '#fff',
    'borderRadius': '2px',
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'user-card-title': {
    'borderRadius': '2px 2px 0px 0px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'user-card-img': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'user-card-text': {
    'marginLeft': [{ 'unit': 'px', 'value': 50 }]
  },
  'user-card-text h4': {
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#333',
    'maxWidth': [{ 'unit': 'px', 'value': 180 }],
    'minHeight': [{ 'unit': 'px', 'value': 50 }],
    'fontWeight': '500',
    'wordWrap': 'break-word'
  },
  'user-card-tip': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#999'
  },
  'user-card-bottom': {
    'lineHeight': [{ 'unit': 'px', 'value': 22 }],
    'textIndent': '10px',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#999',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e4e4' }]
  },
  'message-location': {
    'width': [{ 'unit': 'px', 'value': 240 }],
    'minHeight': [{ 'unit': 'px', 'value': 40 }],
    'backgroundColor': '#ffffff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '2px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'textDecoration': 'none',
    'color': '#333'
  },
  'message-location h4': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '500',
    'wordWrap': 'break-word'
  },
  'message-location-description': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#9c9c9c',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'message-location-icon': {
    'marginTop': [{ 'unit': 'px', 'value': 4 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'backgroundImage': 'url('../img/wechat/map.jpg')',
    'backgroundSize': '100%'
  },
  'share-location': {
    'color': '#999'
  },
  'transfer-img': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'backgroundImage': 'url('../img/wechat/transfer.png')',
    'backgroundSize': '100%',
    'verticalAlign': 'top',
    'marginTop': [{ 'unit': 'px', 'value': 3 }]
  },
  'transfer-ok-img': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'backgroundImage': 'url('../img/wechat/transfer_ok.png')',
    'backgroundSize': '100%',
    'verticalAlign': 'top',
    'marginTop': [{ 'unit': 'px', 'value': 3 }]
  },
  'transfer-title': {
    'backgroundColor': '#fc9d2b',
    'borderRadius': '2px 2px 0px 0px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'transfer-title h4': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'maxWidth': [{ 'unit': 'px', 'value': 180 }],
    'minHeight': [{ 'unit': 'px', 'value': 50 }],
    'fontWeight': '500',
    'wordWrap': 'break-word'
  },
  'current-year > ul': {
    'display': 'block'
  },
  'video-item-container': {
    'width': [{ 'unit': '%H', 'value': 0.33333333330000003 }],
    'boxSizing': 'border-box'
  },
  'image-item-container': {
    'width': [{ 'unit': '%H', 'value': 0.33333333330000003 }],
    'boxSizing': 'border-box'
  },
  'video-title': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'fontFamily': 'PingFangSC-Regular',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333333'
  },
  'video-item-container > div': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'image-item-container > div': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'video-item-container > div': {
    'overflow': 'hidden'
  },
  'place-holder': {
    'padding': [{ 'unit': '%V', 'value': 0.5 }, { 'unit': '%H', 'value': 0.5 }, { 'unit': '%V', 'value': 0.5 }, { 'unit': '%H', 'value': 0.5 }]
  },
  'video-item': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'image-item': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'image-item': {
    'opacity': '0'
  },
  'play-layer': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundImage': 'url('../img/wechat/playbtn.png')',
    'backgroundSize': '50px auto',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center',
    'backgroundColor': 'rgba(0,0,0,0.2)',
    'zIndex': '1'
  },
  'timeline-container': {
    'display': 'none',
    'margin': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'fontFamily': 'PingFangSC-Semibold',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#fff'
  },
  'current-timeline': {
    'display': 'block'
  },
  'timeline-container::before': {
    'content': '' '',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 6 }],
    'left': [{ 'unit': 'px', 'value': -4 }],
    'width': [{ 'unit': 'px', 'value': 4 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': NaN }],
    'height': [{ 'unit': '%V', 'value': NaN }],
    'height': [{ 'unit': '%V', 'value': NaN }],
    'height': [{ 'unit': '%V', 'value': NaN }],
    'backgroundColor': 'rgba(0,0,0,0.2)'
  },
  'timeline-year::before': {
    'display': 'inline-block',
    'content': '' '',
    'width': [{ 'unit': 'px', 'value': 4 }],
    'height': [{ 'unit': 'px', 'value': 4 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }],
    'borderRadius': '4px',
    'backgroundColor': 'rgba(0,0,0,0.2)',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 6 }],
    'left': [{ 'unit': 'px', 'value': -14 }]
  },
  'current-timeline-year::before': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.5)' }],
    'backgroundColor': '#fee444'
  },
  'timeline-year': {
    'marginLeft': [{ 'unit': 'px', 'value': 8 }]
  },
  'timeline-year > ul': {
    'display': 'none',
    'transition': 'all 0.5s'
  },
  'timeline-year > h4': {
    'lineHeight': [{ 'unit': 'px', 'value': 21 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'cursor': 'pointer'
  },
  'current-timeline-year > ul': {
    'display': 'block'
  },
  'timeline-month': {
    'color': 'rgba(255,255,255,0.4)',
    'marginLeft': [{ 'unit': 'px', 'value': 7 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'current-timeline-month': {
    'color': '#fee444'
  },
  'current-timeline-month::before': {
    'display': 'inline-block',
    'content': '' '',
    'width': [{ 'unit': 'px', 'value': 2 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.5)' }],
    'borderRadius': '4px',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 6 }],
    'left': [{ 'unit': 'px', 'value': -20 }],
    'backgroundColor': '#fee444'
  }
});

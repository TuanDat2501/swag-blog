(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{6837:function(e,t,a){Promise.resolve().then(a.bind(a,6947))},6947:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var l=a(7437),n=a(2265);a(505);var i=a(8472),s=a(6648),o=a(6463),c=a(6123),r=a(1165);a(6978);var d=()=>(0,l.jsx)("span",{className:"loader"}),m=()=>{let e=(0,o.useRouter)(),t=(0,o.useSearchParams)(),m=t.get("blogId")||"2336283564104274815",u=t.get("channel");console.log(u);let[h,g]=(0,n.useState)(),p=r.UK,[v,x]=(0,n.useState)(),[f,y]=(0,n.useState)(""),[I,b]=(0,n.useState)(""),[j,N]=(0,n.useState)(!1),k=t=>{e.push("/blog/blogId?p=".concat(t,"&b=").concat(w.blogId))},[U,C]=(0,n.useState)(0),[w,S]=(0,n.useState)({name:"We luck",api_key:"AIzaSyBnTJYeJFCcwmKiC8dDWPce6WuiTKA2pR4",channelId:"UC3dW5i2TdXzcXBUEYpl8pgQ",blogId:"2336283564104274815"}),_=t=>{x(null),g(null),e.push("?blogId=".concat(t.blogId,"&channel=").concat(t.name))},A=e=>{let t=p.find(e=>e.blogId==m);N(!0),(0,i.Z)("".concat(f,"?key=").concat(null==t?void 0:t.api_key,"&pageToken=").concat(e)).then(e=>{N(!1);let t=e.data.items;e.data.nextPageToken?b(e.data.nextPageToken):b("");let l=[];for(let e=0;e<t.length;e++)if(t[e]){let n,i={title:"",content:"",publishDate:"",id:"",thumbnailUrl:"",fullContent:"",videoId:"",author:{avatarUrl:"",displayName:""}},s=a(156).load(t[e].content),o=s("iframe").attr("youtube-src-id");o?i.videoId=o:i.videoId=s("img").attr("src")||"",n=s("div.separator").text()?s("div.separator").text():s("p").text();let c={month:"long",day:"numeric",year:"numeric"},r=new Date(t[e].published),d=new Intl.DateTimeFormat("en-US",c).format(r);i.thumbnailUrl="",i.title=t[e].title,i.content=n,i.publishDate=d,i.id=t[e].id,i.fullContent=t[e].content,i.author.avatarUrl=t[e].author.image.url,i.author.displayName=t[e].author.displayName,l.push(i)}g(null==h?void 0:h.concat(l))})};return(0,n.useEffect)(()=>{let e=p.find(e=>e.blogId==m);e&&i.Z.get("".concat(r.p3).concat(m,"?key=").concat(e.api_key)).then(t=>{C(t.data.posts.totalItems),y(t.data.posts.selfLink),i.Z.get("".concat(t.data.posts.selfLink,"?key=").concat(e.api_key,"&maxResults=9")).then(e=>{let t=e.data.items;e.data.nextPageToken&&b(e.data.nextPageToken),e.data.nextPageToken&&b(e.data.nextPageToken);let l=[];for(let e=0;e<t.length;e++)if(t[e]){let n,i={title:"",content:"",publishDate:"",id:"",thumbnailUrl:"",fullContent:"",videoId:"",author:{avatarUrl:"",displayName:""}},s=a(156).load(t[e].content),o=s("iframe").attr("youtube-src-id");o?i.videoId=o:i.videoId=s("img").attr("src")||"",n=s("div.separator").text()?s("div.separator").text():s("p").text();let c={month:"long",day:"numeric",year:"numeric"},r=new Date(t[e].published),d=new Intl.DateTimeFormat("en-US",c).format(r);i.thumbnailUrl="",i.title=t[e].title,i.content=n,i.publishDate=d,i.id=t[e].id,i.fullContent=t[e].content,i.author.avatarUrl=t[e].author.image.url,i.author.displayName=t[e].author.displayName,l.push(i)}g(l)}).catch(e=>{console.log(e)}).finally(()=>{})}).catch(e=>{console.log(e)}).finally(()=>{})},[m,p]),(0,n.useEffect)(()=>{if(h){let e=h.map(e=>e.videoId).join(",");i.Z.get("".concat(r.n8,"videos"),{params:{part:"snippet,contentDetails,player",key:w.api_key,id:e}}).then(e=>{for(let a=0;a<h.length;a++){let l=e.data.items.find(e=>h[a].videoId==e.id);if(l){var t;h[a].thumbnailUrl=null===(t=l.snippet)||void 0===t?void 0:t.thumbnails.standard.url}else h[a].thumbnailUrl=h[a].videoId}x(h)}).catch(e=>{console.log(e)}).finally(()=>{})}},[w,h]),(0,n.useEffect)(()=>{a(3093)},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"header-blog",children:(0,l.jsx)("div",{className:"overlay"})}),(0,l.jsxs)("div",{className:"content-blog",children:[(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-12",children:[(0,l.jsx)("h2",{className:"tm-page-title mb-4",children:"Blogs"}),(0,l.jsxs)("div",{className:"tm-categories-container mb-4 flex",children:[(0,l.jsx)("h3",{className:"tm-text-primary tm-categories-text",children:"Categories:"}),(0,l.jsx)("ul",{className:"nav tm-category-list flex gap-5",children:p.map((e,t)=>(0,l.jsx)("li",{className:u==e.name?"nav-item tm-category-item active":"nav-item tm-category-item",children:(0,l.jsx)("a",{className:"nav-link tm-category-link cursor-pointer",onClick:()=>_(e),children:e.name})},t))})]})]})}),(0,l.jsx)("div",{className:"row tm-catalog-item-list",children:v?v.map((e,t)=>(0,l.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-12 tm-catalog-item tm-bg-gray",children:[(0,l.jsxs)("div",{className:"position-relative tm-thumbnail-container",onClick:()=>k(null==e?void 0:e.id),children:[(0,l.jsx)(s.default,{width:200,height:200,quality:100,src:null==e?void 0:e.thumbnailUrl,alt:"Image",className:"img-fluid tm-catalog-item-img"}),(0,l.jsx)("a",{className:"position-absolute tm-img-overlay"})]}),(0,l.jsxs)("div",{className:"p-4 tm-catalog-item-description",children:[(0,l.jsxs)("div",{className:"content-item",children:[(0,l.jsx)("h3",{className:"tm-text-primary mb-3 tm-catalog-item-title",children:null==e?void 0:e.title}),(0,l.jsx)("p",{className:"tm-catalog-item-text",children:null==e?void 0:e.content})]}),(0,l.jsx)("p",{children:null==e?void 0:e.publishDate}),(0,l.jsx)("div",{className:"author",children:(0,l.jsxs)("div",{className:"avatar",children:[(0,l.jsx)(s.default,{width:200,height:200,quality:100,src:null==e?void 0:e.author.avatarUrl,alt:"avarta"}),(0,l.jsx)("p",{children:null==e?void 0:e.author.displayName})]})})]})]},t)):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{}),(0,l.jsx)(c.Z,{}),(0,l.jsx)(c.Z,{})]})}),(0,l.jsx)("div",{children:""!==I&&(0,l.jsx)("ul",{className:"nav tm-paging-links flex",children:j?(0,l.jsx)(d,{}):(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{onClick:()=>A(I),className:"nav-link tm-paging-link",children:" See more"})})})})]})]})}},6123:function(e,t,a){"use strict";var l=a(7437);a(2265);var n=a(549);a(2076),t.Z=()=>(0,l.jsxs)("div",{className:"skeleton-item",children:[(0,l.jsx)(n.Z.Image,{active:!0,style:{width:"100%",height:"100%"}}),(0,l.jsx)(n.Z,{active:!0})]})},1165:function(e,t,a){"use strict";a.d(t,{$h:function(){return n},UK:function(){return o},ju:function(){return s},n8:function(){return l},p3:function(){return i}});let l="https://content-youtube.googleapis.com/youtube/v3/",n="AIzaSyDRrwtxM4REuwFaruHqzL8VORX7YqOTK00",i="https://www.googleapis.com/blogger/v3/blogs/",s="https://www.googleapis.com/youtube/v3",o=[{name:" Ididots In Cars",api_key:"AIzaSyBnTJYeJFCcwmKiC8dDWPce6WuiTKA2pR4",channelId:"UC3dW5i2TdXzcXBUEYpl8pgQ",blogId:"2336283564104274815"},{name:"Mouse Farm",api_key:"AIzaSyCidjgzpwEw9ja5fClDLgHHtAcYd8u7TBs",channelId:"UCcguEALpeQIu6PKQBumtNcQ",blogId:"969969710166700179"},{name:"Storm Moments",api_key:"AIzaSyCPhW2f8QA_4M8dOR33ByZrR8wAmwL4Qmk",channelId:"UC8Rohf4JGwlKIUSnYlUipvQ",blogId:"5186892035112058551"},{name:"Instant Karma",api_key:"AIzaSyCdFnZWYvuNNKUPCtqT50aSm--xivArxKA",channelId:"UCU_0ofvjo8FrkP2f6NFF7XQ",blogId:"5938893414256117793"},{name:"Motor Crash",api_key:"AIzaSyDGsdo4W7vqH2j3fneSKI0_I0ezjA7RXSU",channelId:"UCx-hQqGM-upoYSyy2n0t0xg",blogId:"1931491334598443146"},{name:"Supercar Fails",api_key:"AIzaSyASPYUYeY_-1pDp81RI_inI3UJcUahm58w",channelId:"UCHXMtIadBUGVhfCzwUoGLuA",blogId:"7456989316884997047"}]},3093:function(){},505:function(){},6978:function(){},2076:function(){}},function(e){e.O(0,[737,106,150,753,131,482,156,478,23,744],function(){return e(e.s=6837)}),_N_E=e.O()}]);